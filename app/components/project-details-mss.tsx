"use client";

interface HeaderProps {
  label: string;
  value: string;
}
interface DetailRowProps {
  label: string;
  value: string;
}

function HeaderRow({ label, value }: HeaderProps) {
  return (
    <div className="flex items-center justify-between py-4 border-t border-border">
      <span className="text-sm text-foreground font-bold">{label}</span>
      <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 font-bold rounded">
        {value}
      </span>
    </div>
  );
}
function DetailRow({ label, value }: DetailRowProps) {
  const isWebsite = label === "Website";

  return (
    <div className="flex items-center justify-between py-4 border-t border-border">
      <span className="text-sm text-foreground">{label}</span>
      {isWebsite ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded cursor-pointer hover:opacity-80"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded">
          {value}
        </span>
      )}
    </div>
  );
}

export function ProjectDetails() {
  const header = [{ label: "Project", value: "MICHAEL STEVENS SOLICITORS" }];
  const details = [
    { label: "Category", value: "LAW" },
    { label: "Services", value: "DEVELOPMENT" },
    { label: "Year", value: "2024 - ONGOING" },
    { label: "Website", value: "https://michaelstevenssolicitors.com" },
  ];

  return (
    <div className="w-full max-w-md">
      {header.map((item) => (
        <HeaderRow key={item.label} label={item.label} value={item.value} />
      ))}
      {details.map((detail) => (
        <DetailRow
          key={detail.label}
          label={detail.label}
          value={detail.value}
        />
      ))}
    </div>
  );
}
