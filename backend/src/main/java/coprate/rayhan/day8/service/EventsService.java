package corprate.rayhan.service;

import corprate.rayhan.dto.request.EventsRequest;
import corprate.rayhan.dto.response.EventsListResponse;
import corprate.rayhan.dto.response.EventsResponse;


public interface EventsService {
    EventsResponse createEvents(EventsRequest event);

    EventsListResponse getAllEvents();
}
