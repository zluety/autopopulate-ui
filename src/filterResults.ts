import data from "./MOCK_DATA.json";

export default function filterEmoji(searchText: string, maxResults: number) {
  return data
    .filter(record => {
      if (String(record.company_id).includes(searchText.toLowerCase())) {
        return true;
      }
      if (record.company_name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}