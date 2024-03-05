package corprate.rayhan.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import corprate.rayhan.dto.request.EventsRequest;
import corprate.rayhan.dto.response.EventsListResponse;
import corprate.rayhan.dto.response.EventsResponse;
import corprate.rayhan.service.EventsService;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/events")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class EventsController {

    private final EventsService eventsservice;

    @PreAuthorize("hasAuthority('admin:create')")
    @PostMapping("/add")
    public ResponseEntity<?> createEvents(@RequestBody EventsRequest eventsrequest){
        EventsResponse response = new EventsResponse();

        try{
            response = eventsservice.createEvents(eventsrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllEvents(){

        EventsListResponse eventsListResponse = new EventsListResponse();

        try{
            eventsListResponse = eventsservice.getAllEvents();
            return new ResponseEntity<>(eventsListResponse, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(eventsListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
