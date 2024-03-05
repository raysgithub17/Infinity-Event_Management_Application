package corprate.rayhan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import corprate.rayhan.model.Events;

public interface EventsRepository extends JpaRepository<Events, String> {


}
