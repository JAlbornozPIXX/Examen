import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _supabaseService: SupabaseService) {}

  async iniciarSesion(email: string, password: string) {
    return this._supabaseService.cliente.auth.signInWithPassword({
      email,
      password,
    });
  }

  async cerrarSesion() {
    return this._supabaseService.cliente.auth.signOut();
  }

  async registrar(email: string, password: string) {
    return this._supabaseService.cliente.auth.signUp({
      email,
      password,
    });
  }
}
