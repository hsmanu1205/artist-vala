import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full bg-black border-0 p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Artist Vaala Demo Video</DialogTitle>
          <DialogDescription>
            Watch our promotional video to learn more about our services
          </DialogDescription>
        </DialogHeader>

        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full h-10 w-10 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lIdrRRofKm0?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
            title="Artist Vaala Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}