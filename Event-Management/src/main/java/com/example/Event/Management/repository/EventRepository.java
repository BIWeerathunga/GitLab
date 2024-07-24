package com.example.Event.Management.repository;

import com.example.Event.Management.model.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Events,Long> {
}
