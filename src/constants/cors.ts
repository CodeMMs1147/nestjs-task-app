import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const CORS : CorsOptions = {
  origin: true,
  methods: 'GET,HEAD,UPDATE,DELETE,PATCH,POST,OPTIONS,PUT',
  credentials: true
}