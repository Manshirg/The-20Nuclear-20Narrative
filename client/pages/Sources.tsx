import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ExternalLink } from 'lucide-react';

const Sources = () => {
  const primarySources = [
    'Atoms for Peace Speech. Dwight D. Eisenhower. December 8, 1953. United Nations General Assembly. Eisenhower Presidential Library.',
    'Hearing Before the Subcommittee on Energy and Environment. U.S. House of Representatives. March 28, 1979. Government Printing Office.',
    'Letter from Albert Einstein to Franklin D. Roosevelt. August 2, 1939. Franklin D. Roosevelt Presidential Library and Museum.',
    'Minutes of the Interim Committee Meeting. May 31, 1945. National Archives and Records Administration.',
  ];

  const secondarySources = [
    'Boyer, Paul. By the Bomb\'s Early Light: American Thought and Culture at the Dawn of the Atomic Age. New York: Pantheon Books, 1985.',
    'Jungk, Robert. Brighter Than a Thousand Suns: A Personal History of the Atomic Scientists. New York: Harcourt Brace, 1958.',
    'McEnaney, Laura. Civil Defense Begins at Home: Militarization Meets Everyday Life in the Fifties. Princeton: Princeton University Press, 2000.',
    'Nelkin, Dorothy, and Michael Pollak. The Atom Besieged: Antinuclear Movements in France and Germany. Cambridge, MA: MIT Press, 1981.',
    'Weart, Spencer R. Nuclear Fear: A History of Images. Cambridge, MA: Harvard University Press, 1988.',
    'Williams, Robert C., and Philip L. Cantelon, eds. The American Atom: A Documentary History of Nuclear Policies from the Discovery of Fission to the Present. Philadelphia: University of Pennsylvania Press, 1991.',
  ];

  const journalArticles = [
    'Brown, Kate. "The Last Sink: The Human Body as the Ultimate Radioactive Storage Site." RCC Perspectives, no. 1 (2013): 41-47.',
    'Hecht, Gabrielle. "The Power of Nuclear Things." Technology and Culture 51, no. 1 (January 2010): 1-30.',
    'Walker, J. Samuel. "The Atomic Age Begins: Government, Scientists, and the Public after Hiroshima." OAH Magazine of History 9, no. 4 (Summer 1995): 11-16.',
  ];

  const digitalSources = [
    'Atomic Heritage Foundation. "Timeline of the Manhattan Project." Accessed November 2024. https://www.atomicheritage.org/history/timeline',
    'Nuclear Regulatory Commission. "Backgrounder on Three Mile Island Accident." Last modified March 2021. https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/3mile-isle.html',
    'Smithsonian National Museum of American History. "America at War: World War II." Accessed November 2024. https://americanhistory.si.edu/america-at-war',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-nuclear-blue" />
          <h1 className="text-4xl font-serif font-bold mb-4">
            Sources & Bibliography
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete bibliography in Chicago Manual of Style format for all research materials used in this nuclear history study.
          </p>
        </div>

        <div className="space-y-8">
          {/* Primary Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-nuclear-blue">
                Primary Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {primarySources.map((source, index) => (
                  <div key={index} className="pb-3 border-b border-border last:border-b-0">
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {source}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Secondary Sources - Books */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-nuclear-blue">
                Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {secondarySources.map((source, index) => (
                  <div key={index} className="pb-3 border-b border-border last:border-b-0">
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {source}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Journal Articles */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-nuclear-blue">
                Journal Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {journalArticles.map((source, index) => (
                  <div key={index} className="pb-3 border-b border-border last:border-b-0">
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {source}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Digital Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-nuclear-blue">
                Digital Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {digitalSources.map((source, index) => (
                  <div key={index} className="pb-3 border-b border-border last:border-b-0 flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-nuclear-blue mt-0.5 flex-shrink-0" />
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {source}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Citation Note */}
          <Card className="border-l-4 border-l-nuclear-blue bg-muted/20">
            <CardContent className="pt-6">
              <h3 className="font-serif font-semibold mb-2 text-nuclear-blue">
                Citation Format
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All citations follow the Chicago Manual of Style (17th edition) format. 
                Footnotes throughout the website correspond to these sources and provide 
                specific page numbers and additional context where applicable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sources;
