import { Injectable, afterNextRender } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  contentRef: any;
  constructor() {

    afterNextRender(() => {
      this.supabase = createClient(
        'https://hdmtyqlzwtsbjsywplzh.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbXR5cWx6d3RzYmpzeXdwbHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4Mjk2MDUsImV4cCI6MjAxOTQwNTYwNX0.EMLOkBoR5Ppkr3IY10rmMxJEOhSPd6uV88EaVfgvxGw' 
        );
    });
  }
  get cliente(): SupabaseClient {
    return this.supabase;
  }
}
