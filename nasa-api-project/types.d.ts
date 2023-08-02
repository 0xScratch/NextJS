// Types for getting API results for searches

type Item = {
    title: string;
    description: string;
  };
  
type ItemLink = {
    href: string;
};
  
type SearchResult = {
    collection?: {
        items?: {
        data?: Item[];
        links?: ItemLink[];
        }[];
    };
};


// Types for getting API results for 'Astronomical pic of the day'

type Picture = {
    explanation: string,
    title: string,
    url: string
}
  