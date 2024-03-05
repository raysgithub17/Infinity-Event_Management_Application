package corprate.rayhan.service.imp;

import corprate.rayhan.dto.request.EventsRequest;
import corprate.rayhan.dto.response.EventsListResponse;
import corprate.rayhan.dto.response.EventsResponse;
import corprate.rayhan.model.Events;
import corprate.rayhan.repository.EventsRepository;
import corprate.rayhan.service.EventsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventsServiceImpl implements EventsService {

    @Autowired
    private EventsRepository eventsRepository;

    @Override
    public EventsResponse createEvents(EventsRequest event) {

        var eve = Events.builder()
                        .eventname(event.getEventname())
                        .description(event.getDescription())
                        .count(event.getCount())
                        .charge(event.getCharge())
                        .address(event.getAddress())
                        .city(event.getCity())
                        .pincode(event.getPincode())
                        .facility(event.getFacility())
                        .build();

        eventsRepository.save(eve);

        return EventsResponse.builder().message("Events added successfully").build();
    }

    @Override
    public EventsListResponse getAllEvents(){

        List<Events> event = eventsRepository.findAll();
        return EventsListResponse.builder()
            .events(event)
            .build();
    }


    // Other CRUD methods can be implemented similarly
}

