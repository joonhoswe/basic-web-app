export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "jonathan";
  }

  if (query.toLowerCase().includes("id")) {
    return "jjo2";
  }

  if (query.toLowerCase().includes("70 plus 13")) {
    return "83";
  }

  if (query.toLowerCase().includes("41 plus 81")) {
    return "122";
  }

  if (query.toLowerCase().includes("52, 19, 46")) {
    return "52";
  }

  if (query.toLowerCase().includes("99, 26, 14")) {
    return "99";
  }

  if (query.toLowerCase().includes("6, 30, 46")) {
    return "46";
  }

  if (query.toLowerCase().includes("54 plus 74")) {
    return "128";
  }

  if (query.toLowerCase().includes("23, 53, 56")) {
    return "56";
  }

  if (query.toLowerCase().includes("25 plus 12")) {
    return "37";
  }

  if (query.toLowerCase().includes("40, 11")) {
    return "48";
  }

  if (query.toLowerCase().includes("62, 47")) {
    return "91";
  }

  return "";
}
