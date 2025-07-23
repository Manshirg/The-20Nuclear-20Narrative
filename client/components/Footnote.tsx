import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface FootnoteProps {
  number: number;
  citation: string;
  inline?: boolean;
}

const Footnote = ({ number, citation, inline = false }: FootnoteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (inline) {
    return (
      <span className="text-sm text-muted-foreground border-t pt-2 mt-4 block">
        <sup className="text-nuclear-blue font-medium">{number}</sup> {citation}
      </span>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 text-nuclear-blue hover:text-nuclear-blue/80 font-medium text-xs"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <sup>{number}</sup>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 text-sm" side="top">
        <div className="space-y-2">
          <div className="font-medium text-nuclear-blue">Footnote {number}</div>
          <div className="text-muted-foreground leading-relaxed">
            {citation}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Footnote;
