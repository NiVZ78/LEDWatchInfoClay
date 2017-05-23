#include <pebble.h>

// Pointer to main window and layer
static Window *s_main_window;


// INIT
static void init(void) {

  // Create main Window
  s_main_window = window_create();
    
  // Show the Window on the watch, with animated=true
  window_stack_push(s_main_window, true);
  
}


// DEINIT
static void deinit(void) {
  
  // Destroy the main window
  window_destroy(s_main_window);
  
}


// MAIN PROGRAM LOOP
int main(void) {
  init();
  app_event_loop();
  deinit();
}