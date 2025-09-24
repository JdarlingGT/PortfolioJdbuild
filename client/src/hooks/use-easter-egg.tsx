import { useState, useEffect, useCallback, useRef } from "react";

export interface EasterEggTrigger {
  type: 'keySequence' | 'logoClick' | 'secretCode';
  sequence?: string[];
  clickCount?: number;
  code?: string;
}

const DEFAULT_TRIGGERS: EasterEggTrigger[] = [
  {
    type: 'keySequence',
    sequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'] // Konami Code
  },
  {
    type: 'keySequence', 
    sequence: ['KeyJ', 'KeyA', 'KeyC', 'KeyO', 'KeyB'] // "JACOB"
  },
  {
    type: 'logoClick',
    clickCount: 7
  },
  {
    type: 'secretCode',
    code: 'portfolio'
  }
];

export function useEasterEgg(triggers: EasterEggTrigger[] = DEFAULT_TRIGGERS) {
  const [isEasterEggVisible, setIsEasterEggVisible] = useState(false);
  const [currentKeySequence, setCurrentKeySequence] = useState<string[]>([]);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [secretCodeInput, setSecretCodeInput] = useState('');
  const [lastKeyTime, setLastKeyTime] = useState(0);
  
  // Use refs for cleanup to prevent memory leaks
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Reset sequences after timeout
  const SEQUENCE_TIMEOUT = 3000;

  const resetSequences = useCallback(() => {
    setCurrentKeySequence([]);
    setSecretCodeInput('');
  }, []);

  const checkTriggers = useCallback(() => {
    for (const trigger of triggers) {
      switch (trigger.type) {
        case 'keySequence':
          if (trigger.sequence && currentKeySequence.length >= trigger.sequence.length) {
            const lastKeys = currentKeySequence.slice(-trigger.sequence.length);
            if (JSON.stringify(lastKeys) === JSON.stringify(trigger.sequence)) {
              return true;
            }
          }
          break;
        
        case 'logoClick':
          if (trigger.clickCount && logoClickCount >= trigger.clickCount) {
            return true;
          }
          break;
          
        case 'secretCode':
          if (trigger.code && secretCodeInput.toLowerCase().includes(trigger.code.toLowerCase())) {
            return true;
          }
          break;
      }
    }
    return false;
  }, [currentKeySequence, logoClickCount, secretCodeInput, triggers]);

  // Handle keyboard events with cleanup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const now = Date.now();
      
      // Reset if too much time has passed
      if (now - lastKeyTime > SEQUENCE_TIMEOUT) {
        setCurrentKeySequence([]);
        setSecretCodeInput('');
      }
      
      setLastKeyTime(now);

      // Add to key sequence (for key combinations)
      setCurrentKeySequence(prev => {
        const newSequence = [...prev, event.code];
        // Keep only last 20 keys to prevent memory issues
        return newSequence.slice(-20);
      });

      // Add to secret code input (for typing words)
      if (event.key.length === 1 && /[a-zA-Z]/.test(event.key)) {
        setSecretCodeInput(prev => {
          const newInput = prev + event.key.toLowerCase();
          // Keep only last 20 characters
          return newInput.slice(-20);
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lastKeyTime]);

  // Check triggers whenever sequences change
  useEffect(() => {
    if (checkTriggers()) {
      setIsEasterEggVisible(true);
      resetSequences();
      setLogoClickCount(0);
    }
  }, [currentKeySequence, logoClickCount, secretCodeInput, checkTriggers, resetSequences]);

  // Auto-reset sequences after timeout with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      resetSequences();
    }, SEQUENCE_TIMEOUT);

    timeoutsRef.current.push(timer);

    return () => {
      clearTimeout(timer);
      timeoutsRef.current = timeoutsRef.current.filter(t => t !== timer);
    };
  }, [lastKeyTime, resetSequences]);

  // Cleanup all timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const triggerLogoClick = useCallback(() => {
    setLogoClickCount(prev => prev + 1);
    
    // Reset click count after timeout
    const timer = setTimeout(() => {
      setLogoClickCount(0);
    }, 5000);
    
    timeoutsRef.current.push(timer);
  }, []);

  const closeEasterEgg = useCallback(() => {
    setIsEasterEggVisible(false);
    resetSequences();
    setLogoClickCount(0);
  }, [resetSequences]);

  const showEasterEgg = useCallback(() => {
    setIsEasterEggVisible(true);
  }, []);

  return {
    isEasterEggVisible,
    closeEasterEgg,
    showEasterEgg,
    triggerLogoClick,
    currentSequence: currentKeySequence.slice(-10), // For debugging
    logoClickCount,
    secretCodeProgress: secretCodeInput.slice(-10) // For debugging
  };
}