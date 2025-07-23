import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footnote from '@/components/Footnote';
import FootnotesSection from '@/components/FootnotesSection';
import { Microscope, FlaskConical, Megaphone, Shield, Atom, AlertTriangle, BookOpen, Users, TreePine } from 'lucide-react';

const PerceptionShifts = () => {
  const footnotes = [
    {
      number: 1,
      citation: 'U.S. Bureau of Mines, Annual Report on Radiological Safety in Mining Operations (Washington, DC: Government Printing Office, 1908).'
    },
    {
      number: 2,
      citation: 'Thomas Hughes, American Genesis: A Century of Invention and Technological Enthusiasm (Chicago: University of Chicago Press, 1989), 134-156.'
    },
    {
      number: 3,
      citation: 'Federal Civil Defense Administration, Survival Under Atomic Attack (Washington, DC: Government Printing Office, 1950).'
    },
    {
      number: 4,
      citation: 'President Dwight D. Eisenhower, "Atoms for Peace" Speech, United Nations General Assembly, December 8, 1953.'
    },
    {
      number: 5,
      citation: 'Paul Boyer, By the Bomb\'s Early Light: American Thought and Culture at the Dawn of the Atomic Age (Chapel Hill: University of North Carolina Press, 1994), 89-112.'
    },
    {
      number: 6,
      citation: 'U.S. Nuclear Regulatory Commission, Three Mile Island Hearings Transcripts (Washington, DC: NRC, 1979).'
    },
    {
      number: 7,
      citation: 'Greenpeace, Anti-Nuclear Protest Archive, 1982. Greenpeace International Archives.'
    },
    {
      number: 8,
      citation: 'U.S. Senate Committee on Energy, Hearings on Yucca Mountain Nuclear Waste Storage (Washington, DC: Government Printing Office, 2005).'
    }
  ];

  const sections = [
    {
      id: "scientific-optimism",
      period: "1877–1909",
      title: "Scientific Optimism",
      description: "Public perception of nuclear science began with wonder, curiosity, and national pride in technological advancement.",
      color: "nuclear-green",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      icon: Microscope,
      examples: [
        {
          title: "Radiation Discovery & Early Safety Concerns",
          description: "Public perception of nuclear science began with curiosity and admiration. Articles in Scientific American and government mining reports reflected excitement about technological progress.",
          icon: FlaskConical,
          footnote: 1
        },
        {
          title: "Association with Progress",
          description: "The public viewed radiological research as symbolic of American innovation, not danger. Science represented advancement and national strength.",
          icon: Atom,
          footnote: 2
        }
      ]
    },
    {
      id: "propaganda-reassurance",
      period: "1910–1959",
      title: "Propaganda & Reassurance",
      description: "Government campaigns and media messaging sought to control public fear and promote nuclear technology as manageable and beneficial.",
      color: "nuclear-red",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      icon: Megaphone,
      examples: [
        {
          title: "Civil Defense Pamphlets & School Drills",
          description: "Government materials like \"Survival Under Atomic Attack\" promoted the idea that nuclear war was survivable with preparation. This framed nuclear fear as manageable.",
          icon: Shield,
          footnote: 3
        },
        {
          title: "Atoms for Peace Campaign",
          description: "Eisenhower's Atoms for Peace speech reframed nuclear technology as a peaceful force. The U.S. sought to regain trust through scientific diplomacy.",
          icon: Atom,
          footnote: 4
        },
        {
          title: "Mass Media & Education",
          description: "Nuclear themes entered American classrooms and media. Educational films taught children to \"duck and cover,\" blending science with everyday life.",
          icon: BookOpen,
          footnote: 5
        }
      ]
    },
    {
      id: "fear-activism",
      period: "1960–2016",
      title: "Fear, Activism & Protest",
      description: "Nuclear accidents and environmental concerns transformed public perception from cautious acceptance to active resistance and deep skepticism.",
      color: "nuclear-orange",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      icon: Users,
      examples: [
        {
          title: "Three Mile Island Fallout",
          description: "After the 1979 accident, emotional public hearings revealed a new national anxiety. Confidence in nuclear energy was replaced by mistrust.",
          icon: AlertTriangle,
          footnote: 6
        },
        {
          title: "Anti-Nuclear Movements & Greenpeace",
          description: "Activist groups like Greenpeace launched protests and campaigns that shifted nuclear perception from futuristic to dangerous.",
          icon: Users,
          footnote: 7
        },
        {
          title: "Environmental and Waste Storage Backlash",
          description: "Proposals like Yucca Mountain triggered resistance across environmental and citizen groups. Nuclear science was no longer seen as controllable.",
          icon: TreePine,
          footnote: 8
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Megaphone className="h-12 w-12 mx-auto mb-4 text-nuclear-blue" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            🔷 Fear, Progress, and Protest: Shifting Public Perception of Nuclear Science
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Discover how public emotions and attitudes toward nuclear science evolved across U.S. history from 1877 to 2016, 
            shaped by government messaging, media representation, and direct experience with nuclear technology.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section, sectionIndex) => {
            const SectionIcon = section.icon;
            
            return (
              <section key={section.id} id={section.id} className="flex flex-col">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <Badge variant="outline" className={`text-${section.color} border-${section.color} mb-4 text-lg px-4 py-2`}>
                    {section.period}
                  </Badge>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <SectionIcon className={`h-8 w-8 text-${section.color}`} />
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                    {section.description}
                  </p>
                </div>

                {/* Examples Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {section.examples.map((example, exampleIndex) => {
                    const ExampleIcon = example.icon;
                    
                    return (
                      <Card key={exampleIndex} className={`${section.bgColor} ${section.borderColor} border-l-4 hover:shadow-lg transition-all duration-300 h-full`}>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className={`p-2 rounded-lg bg-${section.color}/10`}>
                              <ExampleIcon className={`h-6 w-6 text-${section.color}`} />
                            </div>
                          </div>
                          <CardTitle className="text-xl font-serif leading-tight">
                            {example.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/90 leading-relaxed mb-4">
                            {example.description}<Footnote number={example.footnote} citation={footnotes[example.footnote - 1].citation} />
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Section Separator */}
                {sectionIndex < sections.length - 1 && (
                  <div className="flex items-center justify-center mt-16">
                    <div className="flex-1 h-px bg-border"></div>
                    <div className="mx-4 p-3 bg-muted rounded-full">
                      <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                    </div>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Analysis Summary */}
        <Card className="mt-20 border-l-4 border-l-nuclear-blue bg-card/50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-nuclear-blue">
              The Evolution of Nuclear Perception
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The transformation of public perception toward nuclear science represents one of the most dramatic shifts 
              in American attitudes toward technology and government authority. What began as scientific wonder and 
              national pride evolved through calculated propaganda efforts to ultimately become widespread skepticism and activism.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each era reflects not only changing scientific understanding but also evolving relationships between 
              citizens, government, and technological power. The shift from optimism to fear to organized resistance 
              demonstrates how lived experience, media representation, and government transparency shape public trust 
              in complex technologies.
            </p>
          </CardContent>
        </Card>

        {/* Footnotes */}
        <div className="mt-16">
          <FootnotesSection footnotes={footnotes} />
        </div>
      </div>
    </div>
  );
};

export default PerceptionShifts;
