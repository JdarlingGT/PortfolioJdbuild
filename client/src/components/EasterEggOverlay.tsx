import { useState, useEffect, useRef, useCallback, memo } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface EasterEggOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const EasterEggOverlay = memo(function EasterEggOverlay({ isVisible, onClose }: EasterEggOverlayProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  // Video placeholder - in a real implementation, you'd have an actual video file
  const videoSrc = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4";

  // Memoized handlers to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setHasStarted(false);
    onClose();
  }, [onClose]);

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      overlayRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Optimized mouse move handler
  const handleMouseMove = useCallback(() => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(true);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  }, [isPlaying]);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      toast({
        title: "🎉 Easter Egg Activated!",
        description: "You found the hidden video feature. Enjoy!",
        duration: 3000,
      });
    }
  }, [isVisible, hasStarted, toast]);

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVisible) {
        handleClose();
      }
      if (event.key === " " && isVisible) {
        event.preventDefault();
        togglePlayPause();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleClose, togglePlayPause]);

  // Auto-hide controls after mouse inactivity
  useEffect(() => {
    const resetControlsTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    if (isVisible) {
      resetControlsTimeout();
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isVisible, isPlaying]);

  // Cleanup effect when component unmounts
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-500"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      onMouseMove={handleMouseMove}
      data-testid="easter-egg-overlay"
    >
      {/* Optimized Background Particles - fewer particles for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Video Container */}
      <Card className={`
        relative bg-black border-primary/30 shadow-2xl shadow-primary/20 
        transition-all duration-700 ease-out
        ${isFullscreen ? 'w-full h-full rounded-none' : 'max-w-4xl mx-4 rounded-xl overflow-hidden'}
      `}>
        {/* Video Element */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedData={() => {
              // Auto-play if the video loads successfully
              if (videoRef.current) {
                videoRef.current.play().catch(() => {
                  // Auto-play failed, user needs to interact first
                  setIsPlaying(false);
                });
              }
            }}
            data-testid="easter-egg-video"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback for when video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Easter Egg Video</p>
                <p className="text-sm opacity-75">Video not available in demo</p>
              </div>
            </div>
          </video>

          {/* Video Controls Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50
            transition-opacity duration-300
            ${showControls ? 'opacity-100' : 'opacity-0'}
          `}>
            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-black/50 hover:bg-black/70 text-white border-none"
                onClick={toggleFullscreen}
                data-testid="button-fullscreen"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-black/50 hover:bg-black/70 text-white border-none"
                onClick={handleClose}
                data-testid="button-close-easter-egg"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Center Play Button (when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-black/70 hover:bg-black/90 text-white border-none rounded-full p-6"
                  onClick={togglePlayPause}
                  data-testid="button-play-center"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                className="bg-black/50 hover:bg-black/70 text-white border-none"
                onClick={togglePlayPause}
                data-testid="button-play-pause"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              
              <Button
                variant="secondary"
                size="sm"
                className="bg-black/50 hover:bg-black/70 text-white border-none"
                onClick={toggleMute}
                data-testid="button-mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>

              <div className="flex-1 flex items-center gap-2 text-white text-sm">
                <span className="bg-black/50 px-2 py-1 rounded text-xs">
                  🎉 Easter Egg Activated!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Special Message */}
        {!isFullscreen && (
          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-primary/20">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                🎉 Congratulations! You Found The Easter Egg!
              </h3>
              <p className="text-sm text-muted-foreground">
                You discovered this hidden feature by triggering the secret sequence. 
                This represents the attention to detail and delightful surprises I build into every project.
              </p>
              <div className="flex justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <span>Press ESC to close</span>
                <span>•</span>
                <span>Spacebar to play/pause</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
});

export default EasterEggOverlay;