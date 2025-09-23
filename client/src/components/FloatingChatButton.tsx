import { useState } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatAgent from "./ChatAgent";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsMinimized(true);
    } else {
      setIsOpen(!isOpen);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {(!isOpen || isMinimized) && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40 bg-primary hover:bg-primary/90"
          data-testid="floating-chat-button"
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </Button>
      )}

      {/* Minimized Chat Indicator */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-6 right-20 bg-card border border-border rounded-lg shadow-lg p-3 z-40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Chat minimized</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="p-1 h-auto"
            >
              <Minimize2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeChat}
          />
          
          {/* Chat Container */}
          <div className="relative w-full max-w-md h-[600px] bg-card border border-border rounded-xl shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask about Jacob's work</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(true)}
                  className="p-2 h-auto hover:bg-muted"
                  data-testid="minimize-chat-button"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeChat}
                  className="p-2 h-auto hover:bg-muted"
                  data-testid="close-chat-button"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden">
              <ChatAgent className="h-full border-0 rounded-none shadow-none" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}