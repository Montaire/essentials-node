if (window.EventSource) {
    Fortles.eventSource = new EventSource("/fortles/event-source");
}
else {
    console.warn("Your browser doesn't support SSE");
}
//# sourceMappingURL=event-source.js.map