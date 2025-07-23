import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footnote from '@/components/Footnote';
import FootnotesSection from '@/components/FootnotesSection';
import { Building2, Users, Scale, Megaphone, FileText, Shield, AlertTriangle, Atom, FlaskConical, Radiation } from 'lucide-react';

const GovernmentVsPublic = () => {
  const footnotes = [
    {
      number: 1,
      citation: 'U.S. Bureau of Mines, Annual Report on Radiological Safety in Mining Operations (Washington, DC: Government Printing Office, 1908).'
    },
    {
      number: 2,
      citation: '"Scientific American" Editorial Board, Articles on Radiation and Public Health, 1898–1905.'
    },
    {
      number: 3,
      citation: 'U.S. Department of Energy, Declassified Manhattan Project Memos, 1943–1946. National Archives.'
    },
    {
      number: 4,
      citation: 'President Dwight D. Eisenhower, "Atoms for Peace" Speech, United Nations General Assembly, December 8, 1953.'
    },
    {
      number: 5,
      citation: 'Paul Boyer, By the Bomb\'s Early Light: American Thought and Culture at the Dawn of the Atomic Age (Chapel Hill: University of North Carolina Press, 1994), 201-234.'
    },
    {
      number: 6,
      citation: 'U.S. Nuclear Regulatory Commission, Three Mile Island Hearings Transcripts (Washington, DC: NRC, 1979).'
    },
    {
      number: 7,
      citation: 'U.S. Senate Committee on Energy, Hearings on Yucca Mountain Nuclear Waste Storage (Washington, DC: Government Printing Office, 2005).'
    },
    {
      number: 8,
      citation: 'Greenpeace, Anti-Nuclear Protest Archive, 1982. Greenpeace International Archives.'
    },
    {
      number: 9,
      citation: 'Bulletin of the Atomic Scientists, "The Nuclear Fear: Popular Culture and Public Opinion," Vol. 45, No. 3 (1989): 12-18.'
    }
  ];

  const periods = [
    {
      era: "1877–1909",
      title: "Early Control & Scientific Nationalism",
      government: {
        title: "Government Side: Federal Scientific Oversight",
        content: "The federal government began asserting control over scientific research through agencies like the U.S. Bureau of Mines. This early oversight created the foundation for federal management of radiation, even before atomic weapons. Early bureaucratic structures established precedents for government authority over emerging nuclear technologies.",
        icon: Building2,
        footnote: 1
      },
      public: {
        title: "Public Reaction: Wonder and National Pride",
        content: "The public largely viewed early radiological research as a wonder of American innovation. Articles in Scientific American portrayed radiation as modern magic, not something dangerous. Citizens embraced these discoveries as symbols of American scientific superiority and technological progress.",
        icon: FlaskConical,
        footnote: 2
      }
    },
    {
      era: "1910–1959",
      title: "Secrecy, Propaganda, and Post-War Anxiety",
      government: {
        title: "Government Side: Hidden Research and Reassurance Campaigns",
        content: "The U.S. government concealed much of its nuclear research under wartime secrecy. The Manhattan Project was hidden from public view, while post-war campaigns like Atoms for Peace and civil defense training tried to manage nuclear fear with optimism. Official messaging emphasized control and beneficial applications while minimizing risks.",
        icon: Shield,
        footnotes: [3, 4]
      },
      public: {
        title: "Public Reaction: Growing Doubt and Cultural Resistance",
        content: "While some Americans accepted these messages, others were confused or fearful. Cultural responses — from dystopian films to critical journalism — began questioning whether nuclear science could be safely controlled. Public discourse increasingly reflected anxiety about government transparency and nuclear dangers.",
        icon: Users,
        footnote: 5
      }
    },
    {
      era: "1960–2016",
      title: "Dissent, Disaster, and Distrust",
      government: {
        title: "Government Side: Damage Control and Technical Authority",
        content: "In the wake of nuclear accidents like Three Mile Island, the government attempted damage control via official hearings and technical statements. Yet public confidence continued to erode, especially around waste storage plans like Yucca Mountain. Official responses emphasized scientific expertise while struggling to restore public trust.",
        icon: FileText,
        footnotes: [6, 7]
      },
      public: {
        title: "Public Reaction: Organized Opposition and Democratic Demands",
        content: "Protests surged nationwide. Organizations like Greenpeace questioned the government's transparency, and local communities rejected proposed nuclear waste sites. Grassroots activism helped redefine nuclear science as a democratic issue, not just a technical one. Citizens demanded accountability and meaningful participation in nuclear policy decisions.",
        icon: Megaphone,
        footnotes: [8, 9]
      }
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Scale className="h-12 w-12 mx-auto mb-4 text-nuclear-blue" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            🔷 Control vs Resistance: A Dual Exhibit on Nuclear Policy and Public Reaction
          </h1>
          
          {/* Museum-style Introduction */}
          <Card className="max-w-4xl mx-auto border-l-4 border-l-nuclear-blue bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-nuclear-blue">
                Virtual Museum Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "From the hopeful age of scientific discovery to the age of civil protest, the nuclear story in America was never one-sided. 
                This exhibit contrasts the voices of official authority with the voices of public resistance, across three major periods of nuclear history."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Museum Exhibits */}
        <div className="space-y-20">
          {periods.map((period, index) => (
            <div key={period.era} className="space-y-8">
              {/* Period Header */}
              <div className="text-center">
                <Badge variant="outline" className="text-nuclear-blue border-nuclear-blue mb-4 text-lg px-4 py-2">
                  {period.era}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  {period.title}
                </h2>
              </div>

              {/* Dual Exhibit Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Government Side */}
                <Card className="bg-red-50 dark:bg-red-950/20 border-l-4 border-l-red-500 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <period.government.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <Badge variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                        Government
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {period.government.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 leading-relaxed">
                      {period.government.content}
                      {period.government.footnotes ? (
                        <>
                          {period.government.footnotes.map((footnoteNum, i) => (
                            <Footnote 
                              key={footnoteNum} 
                              number={footnoteNum} 
                              citation={footnotes[footnoteNum - 1].citation} 
                            />
                          ))}
                        </>
                      ) : (
                        <Footnote 
                          number={period.government.footnote} 
                          citation={footnotes[period.government.footnote - 1].citation} 
                        />
                      )}
                    </p>
                  </CardContent>
                </Card>

                {/* Public Side */}
                <Card className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-l-blue-500 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <period.public.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        Public
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {period.public.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 leading-relaxed">
                      {period.public.content}
                      {period.public.footnotes ? (
                        <>
                          {period.public.footnotes.map((footnoteNum, i) => (
                            <Footnote 
                              key={footnoteNum} 
                              number={footnoteNum} 
                              citation={footnotes[footnoteNum - 1].citation} 
                            />
                          ))}
                        </>
                      ) : (
                        <Footnote 
                          number={period.public.footnote} 
                          citation={footnotes[period.public.footnote - 1].citation} 
                        />
                      )}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Period Separator */}
              {index < periods.length - 1 && (
                <div className="flex items-center justify-center mt-16">
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="mx-4 p-3 bg-muted rounded-full">
                    <Atom className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Reflection */}
        <Card className="mt-20 border-l-4 border-l-nuclear-orange bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-nuclear-orange" />
              <CardTitle className="text-2xl font-serif text-nuclear-orange">
                The People's Nuclear Story
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg leading-relaxed italic text-foreground/90 border-l-4 border-nuclear-orange/30 pl-6">
              "The nuclear future was never just written by scientists or politicians. It was shaped by mothers, students, journalists, and protesters — people whose voices helped redefine what 'safe' and 'progress' meant in the nuclear age."
            </blockquote>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Radiation className="h-4 w-4 text-nuclear-orange" />
                <span>Protest Movements</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-nuclear-orange" />
                <span>Safety Concerns</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-nuclear-orange" />
                <span>Democratic Accountability</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Museum Summary */}
        <Card className="mt-12 border-l-4 border-l-nuclear-blue bg-card/50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-nuclear-blue">
              Exhibition Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This dual exhibit reveals the fundamental tension between top-down technological control and bottom-up democratic resistance. 
              Each era demonstrates how official narratives of progress and safety were continually challenged by lived experience, 
              cultural expression, and organized activism. The evolution from scientific enthusiasm to widespread skepticism reflects 
              broader changes in American attitudes toward authority, expertise, and technological risk.
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

export default GovernmentVsPublic;
