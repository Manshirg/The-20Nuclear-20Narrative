import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Atom, ArrowRight, Clock, Users, FileText, Zap } from 'lucide-react';
import Footnote from '@/components/Footnote';
import FootnotesSection from '@/components/FootnotesSection';

const Index = () => {
  const footnotes = [
    {
      number: 1,
      citation: 'Spencer R. Weart, Nuclear Fear: A History of Images (Cambridge, MA: Harvard University Press, 1988), 45-67.'
    },
    {
      number: 2,
      citation: 'Paul Boyer, By the Bomb\'s Early Light: American Thought and Culture at the Dawn of the Atomic Age (New York: Pantheon Books, 1985), 123-145.'
    },
    {
      number: 3,
      citation: 'Robert Jungk, Brighter Than a Thousand Suns: A Personal History of the Atomic Scientists (New York: Harcourt Brace, 1958), 89-102.'
    },
    {
      number: 4,
      citation: 'Laura McEnaney, Civil Defense Begins at Home: Militarization Meets Everyday Life in the Fifties (Princeton: Princeton University Press, 2000), 78-94.'
    },
    {
      number: 5,
      citation: 'Dorothy Nelkin and Michael Pollak, The Atom Besieged: Antinuclear Movements in France and Germany (Cambridge, MA: MIT Press, 1981), 156-178.'
    }
  ];

  const eras = [
    {
      period: "1877–1909",
      title: "Early Scientific Enthusiasm",
      summary: "The dawn of nuclear science was marked by unbridled optimism and scientific wonder, as researchers like Marie Curie discovered radioactivity and its potential applications.",
      color: "nuclear-green",
      icon: Atom,
      footnote: 1
    },
    {
      period: "1910–1959",
      title: "Atomic Anxiety + Cold War Secrecy",
      summary: "The atomic bomb's devastating power and Cold War tensions transformed nuclear technology from scientific marvel to existential threat, shrouded in government secrecy.",
      color: "nuclear-red",
      icon: Zap,
      footnote: 2
    },
    {
      period: "1960–2016",
      title: "Protest, Distrust, and Fallout",
      summary: "Public awareness of nuclear dangers grew through accidents like Three Mile Island and Chernobyl, sparking environmental movements and widespread distrust of nuclear institutions.",
      color: "nuclear-orange",
      icon: Users,
      footnote: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Atom className="h-16 w-16 mx-auto mb-6 text-nuclear-blue" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-nuclear-blue to-nuclear-orange bg-clip-text text-transparent">
              Nuclear Perceptions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Exploring the Evolution of Public Perception of Nuclear Technology Through History
            </p>
          </div>
        </div>
      </section>

      {/* Thesis Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-nuclear-blue bg-card/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <FileText className="h-6 w-6 text-nuclear-blue" />
                Thesis Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg md:text-xl leading-relaxed italic text-foreground/90 border-l-4 border-nuclear-blue/30 pl-6">
                "The public perception of nuclear technology has undergone a dramatic transformation from initial scientific enthusiasm (1877-1909)<Footnote number={1} citation={footnotes[0].citation} /> through atomic anxiety and Cold War secrecy (1910-1959)<Footnote number={2} citation={footnotes[1].citation} /> to widespread protest and institutional distrust (1960-2016)<Footnote number={3} citation={footnotes[2].citation} />, shaped by government propaganda, media representation, and direct experiences with nuclear accidents and weapons testing."<Footnote number={4} citation={footnotes[3].citation} />
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Era Overview */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Three Eras of Nuclear Perception
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how public understanding and attitudes toward nuclear technology evolved across nearly 140 years of scientific and political developments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eras.map((era, index) => {
              const IconComponent = era.icon;
              return (
                <Card key={era.period} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className={`text-${era.color} border-${era.color}`}>
                        {era.period}
                      </Badge>
                      <IconComponent className={`h-6 w-6 text-${era.color}`} />
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {era.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {era.summary}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation to other sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Explore the Research
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive deeper into the historical evidence and analysis that supports this thesis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <Link to="/timeline" className="block">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-nuclear-blue" />
                      Interactive Timeline
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore key events from 1877-2016 with visual elements and historical context.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <Link to="/perception-shifts" className="block">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-nuclear-orange" />
                      Perception Shifts
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyze media influence, propaganda campaigns, and public protest movements.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <Link to="/government-vs-public" className="block">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-nuclear-red" />
                      Government vs Public
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compare official narratives with citizen responses and grassroots movements.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <Link to="/sources" className="block">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-nuclear-gray" />
                      Sources & Bibliography
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete academic citations and source materials in Chicago style format.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Atom className="h-5 w-5 text-nuclear-blue" />
            <span className="font-serif font-semibold">Nuclear Perceptions</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A comprehensive study of public perception of nuclear technology throughout history
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
