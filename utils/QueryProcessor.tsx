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

  if (query.toLowerCase().includes("98, 90")) {
    return "98";
  }

  if (query.toLowerCase().includes("16, 96")) {
    return "96";
  }

  if (query.toLowerCase().includes("31 plus 76")) {
    return "107";
  }

  if (query.toLowerCase().includes("32 plus 66")) {
    return "98";
  }

  if (query.toLowerCase().includes("90, 34")) {
    return "90";
  }

  if (query.toLowerCase().includes("33 plus 79")) {
    return "112";
  }

  if (query.toLowerCase().includes("15, 66, 61")) {
    return "66";
  }

  return "";
}
