import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BookOpen } from 'lucide-react';

interface Reference {
  id: string;
  citation: string;
  type?: 'book' | 'article' | 'primary' | 'digital';
}

interface ReferencesSectionProps {
  references: Reference[];
  title?: string;
  description?: string;
}

const ReferencesSection = ({ 
  references, 
  title = "References", 
  description = "Sources cited on this page" 
}: ReferencesSectionProps) => {
  if (references.length === 0) return null;

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'book': return 'Book';
      case 'article': return 'Journal Article';
      case 'primary': return 'Primary Source';
      case 'digital': return 'Digital Source';
      default: return '';
    }
  };

  return (
    <section className="mt-16 pt-8">
      <Card className="border-l-4 border-l-nuclear-blue">
        <CardHeader>
          <CardTitle className="text-xl font-serif flex items-center gap-2 text-nuclear-blue">
            <BookOpen className="h-5 w-5" />
            {title}
          </CardTitle>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {references.map((reference, index) => (
              <div key={reference.id} className="pb-3 border-b border-border last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="text-sm font-medium text-nuclear-blue min-w-[24px]">
                    {index + 1}.
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {reference.citation}
                    </p>
                    {reference.type && (
                      <span className="inline-block mt-1 px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {getTypeLabel(reference.type)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReferencesSection;
