interface FootnoteData {
  number: number;
  citation: string;
}

interface FootnotesSectionProps {
  footnotes: FootnoteData[];
  title?: string;
}

const FootnotesSection = ({
  footnotes,
  title = "Footnotes",
}: FootnotesSectionProps) => {
  if (footnotes.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="text-lg font-serif font-semibold mb-6 text-nuclear-blue">
        {title}
      </h3>
      <div className="space-y-3">
        {footnotes.map((footnote) => (
          <div key={footnote.number} className="text-sm leading-relaxed">
            <sup className="text-nuclear-blue font-medium mr-1">
              {footnote.number}
            </sup>
            <span className="text-muted-foreground">{footnote.citation}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FootnotesSection;
