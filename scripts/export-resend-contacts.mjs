const apiKey = process.env.RESEND_API_KEY?.trim();
const formatArgument = process.argv.find((argument) => argument.startsWith("--format="));
const format = formatArgument?.split("=")[1] || "csv";

if (!apiKey) {
  throw new Error("Set RESEND_API_KEY before exporting contacts.");
}

if (!new Set(["csv", "json"]).has(format)) {
  throw new Error("Use --format=csv or --format=json.");
}

const contacts = [];
let after;

do {
  const url = new URL("https://api.resend.com/contacts");
  url.searchParams.set("limit", "100");

  if (after) {
    url.searchParams.set("after", after);
  }

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!response.ok) {
    throw new Error(`Resend contact export failed with status ${response.status}.`);
  }

  const page = await response.json();
  contacts.push(...page.data);
  after = page.has_more ? page.data.at(-1)?.id : undefined;
} while (after);

if (format === "json") {
  process.stdout.write(`${JSON.stringify(contacts, null, 2)}\n`);
} else {
  const escapeCell = (value) => {
    const text = typeof value === "object" && value !== null ? JSON.stringify(value) : String(value ?? "");
    return `"${text.replaceAll('"', '""')}"`;
  };
  const columns = ["id", "email", "unsubscribed", "created_at", "properties"];
  const rows = contacts.map((contact) =>
    columns.map((column) => escapeCell(contact[column])).join(","),
  );

  process.stdout.write(`${columns.join(",")}\n${rows.join("\n")}\n`);
}
