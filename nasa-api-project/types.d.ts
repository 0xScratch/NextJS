// Types for getting API results for searches

type Item = {
    title: string;
    description: string;
    nasa_id: string
  };
  
type ItemLink = {
    href: string;
};

type Result = {
    data?: Item[0],
    links?: ItemLink[0]
}
  
type SearchResult = {
    collection?: {
        items?: Result[]
    };
};


// Types for getting API results for 'Astronomical pic of the day'

type Picture = {
    explanation: string,
    title: string,
    url: string
} 