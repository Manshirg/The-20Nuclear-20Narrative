import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footnote from "@/components/Footnote";
import FootnotesSection from "@/components/FootnotesSection";
import {
  Clock,
  Atom,
  Zap,
  AlertTriangle,
  Users,
  FlaskConical,
  Radiation,
  Shield,
  Megaphone,
} from "lucide-react";

const Timeline = () => {
  const footnotes = [
    {
      number: 1,
      citation:
        "Thomas Edison, Letter on Military Technology and Radiological Research, 1896. National Archives.",
    },
    {
      number: 2,
      citation:
        "U.S. Bureau of Mines, Annual Report on Radiological Safety in Mining Operations, 1908.",
    },
    {
      number: 3,
      citation:
        "Paul Boyer, By the Bomb's Early Light (Chapel Hill: University of North Carolina Press, 1994), 67-89.",
    },
    {
      number: 4,
      citation:
        "Federal Civil Defense Administration, Survival Under Atomic Attack (Washington, DC: Government Printing Office, 1950).",
    },
    {
      number: 5,
      citation:
        'President Dwight D. Eisenhower, "Atoms for Peace" Speech, United Nations General Assembly, December 8, 1953.',
    },
    {
      number: 6,
      citation:
        "U.S. Nuclear Regulatory Commission, Three Mile Island Hearings Transcripts (Washington, DC: NRC, 1979).",
    },
    {
      number: 7,
      citation:
        "Greenpeace, Anti-Nuclear Protest Archive, 1982. Greenpeace International Archives.",
    },
    {
      number: 8,
      citation:
        "U.S. Senate Committee on Energy, Hearings on Yucca Mountain Nuclear Waste Storage (Washington, DC: Government Printing Office, 2005).",
    },
  ];

  const timelineData = [
    {
      era: "1877–1909",
      title: "The Age of Discovery and Enthusiasm",
      description:
        "Scientific curiosity and optimism dominated public perception of nuclear research.",
      color: "nuclear-green",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      events: [
        {
          year: "1896",
          title:
            "Thomas Edison experiments with radiological technology for military use",
          description:
            "This marked early interest in radiation by American inventors, reflecting national excitement about scientific progress.",
          icon: FlaskConical,
          footnote: 1,
        },
        {
          year: "1908",
          title:
            "U.S. Bureau of Mines reports on radiation exposure in uranium mining",
          description:
            "This was one of the earliest government acknowledgments of radiation risk, linking industrial work and science.",
          icon: Radiation,
          footnote: 2,
        },
      ],
    },
    {
      era: "1910–1959",
      title: "The Rise of Atomic Power and Secrecy",
      description:
        "Nuclear technology became associated with warfare, government secrecy, and national defense.",
      color: "nuclear-red",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      events: [
        {
          year: "1945",
          title: "Atomic bombs dropped on Hiroshima and Nagasaki",
          description:
            "Public awe quickly turned to fear as nuclear science became associated with mass destruction.",
          icon: Zap,
          footnote: 3,
        },
        {
          year: "1950",
          title: "Government releases Survival Under Atomic Attack pamphlet",
          description:
            "Civil defense messaging aimed to reassure the public, despite growing unease about nuclear war.",
          icon: Shield,
          footnote: 4,
        },
        {
          year: "1953",
          title: "Eisenhower delivers Atoms for Peace speech at the U.N.",
          description:
            "This marked an attempt to rebrand nuclear energy as a tool of peace rather than destruction.",
          icon: Atom,
          footnote: 5,
        },
      ],
    },
    {
      era: "1960–2016",
      title: "Fallout, Fear, and Activism",
      description:
        "Public disasters and environmental concerns led to widespread distrust and protest movements.",
      color: "nuclear-orange",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      events: [
        {
          year: "1979",
          title: "Three Mile Island nuclear accident shocks the nation",
          description:
            "Public trust in nuclear power and the government rapidly eroded, leading to protests and reform.",
          icon: AlertTriangle,
          footnote: 6,
        },
        {
          year: "1982",
          title: "Greenpeace stages major anti-nuclear protest",
          description:
            "Protest movements gained national attention, shaping the policy narrative and media coverage.",
          icon: Megaphone,
          footnote: 7,
        },
        {
          year: "2005",
          title: "U.S. Senate hearings on Yucca Mountain waste storage",
          description:
            "Environmental and public health concerns dominated the debate, showing how deeply embedded skepticism had become.",
          icon: Users,
          footnote: 8,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Clock className="h-12 w-12 mx-auto mb-4 text-nuclear-blue" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            🔷 Nuclear History Timeline (1877–2016)
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore how public perception of nuclear science evolved across
            three distinct eras — from optimism and discovery through secrecy
            and fear, to activism and resistance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

          {timelineData.map((period, periodIndex) => (
            <div key={period.era} className="mb-16">
              {/* Era Header */}
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className={`text-${period.color} border-${period.color} mb-4 text-lg px-4 py-2`}
                >
                  {period.era}
                </Badge>
                <h2 className="text-3xl font-serif font-semibold mb-2">
                  {period.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {period.description}
                </p>
              </div>

              {/* Events */}
              <div className="space-y-8">
                {period.events.map((event, eventIndex) => {
                  const IconComponent = event.icon;
                  const isEven = eventIndex % 2 === 0;

                  return (
                    <div key={event.year} className="relative">
                      {/* Timeline dot - hidden on mobile */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                        <div
                          className={`w-4 h-4 rounded-full bg-${period.color} border-4 border-background`}
                        ></div>
                      </div>

                      {/* Event Card */}
                      <div
                        className={`lg:w-1/2 ${isEven ? "lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                      >
                        <Card
                          className={`${period.bgColor} ${period.borderColor} border-l-4 hover:shadow-lg transition-shadow duration-300`}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <Badge
                                  variant="secondary"
                                  className="mb-2 font-mono"
                                >
                                  {event.year}
                                </Badge>
                                <CardTitle className="text-xl font-serif leading-tight">
                                  {event.title}
                                  <Footnote
                                    number={event.footnote}
                                    citation={
                                      footnotes[event.footnote - 1].citation
                                    }
                                  />
                                </CardTitle>
                              </div>
                              <div
                                className={`p-2 rounded-lg bg-${period.color}/10`}
                              >
                                <IconComponent
                                  className={`h-6 w-6 text-${period.color}`}
                                />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/90 leading-relaxed">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Era Separator */}
              {periodIndex < timelineData.length - 1 && (
                <div className="flex items-center justify-center my-16">
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="mx-4 p-2 bg-muted rounded-full">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  </div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <Card className="mt-16 border-l-4 border-l-nuclear-blue bg-card/50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-nuclear-blue">
              Timeline Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This timeline demonstrates the dramatic shift in public perception
              of nuclear technology over nearly 140 years. From the initial
              wonder and optimism of scientific discovery, through the fear and
              secrecy of the atomic age, to the activism and environmental
              concerns of modern times. Each era reflects broader societal
              attitudes toward science, government authority, and technological
              progress.
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

export default Timeline;
