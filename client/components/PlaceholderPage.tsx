import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
            <Construction className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl font-serif">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground">
            This page is coming soon. Continue prompting to have me fill in the content for this section.
          </p>
          <Button variant="outline" asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Content Coming Soon
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
