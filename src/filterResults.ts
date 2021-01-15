import data from "./MOCK_DATA.json";

export default function filterEmoji(searchText: string, maxResults: number) {
  return data
    .filter(record => {
      if (String(record.clientNumber).includes(searchText.toLowerCase())) {
        return true;
      }
      if (record.institution.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}