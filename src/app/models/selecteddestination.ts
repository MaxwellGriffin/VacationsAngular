export interface Selecteddestination {
    SelectedDestinationID?: number;
    Day?: number;
    ItineraryID?: number;
    DestinationID?: number;

    //From destination
    Region?: string;
    TripType?: number;
    Price?: number;
    Name?: string;
    MinGuests?: number;
    MaxGuests?: number;
    Location?: string;
}