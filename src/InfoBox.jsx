import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Weather.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1702155298482-60714503f5e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0";

  const HOT_URL="https://images.unsplash.com/photo-1561693666-609d8bfdfa1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMGFwcCUyMGZvciUyMGhvdCUyMGNsaW1hdGV8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1705077031869-51b60754302a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGFwcCUyMGZvciUyMHJhaW4lMjBjbGltYXRlfGVufDB8fDB8fHww";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1663126795429-2439d266aff3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBhcHAlMjBmb3IlMjBjb2xkJTIwY2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className = "cardcontainer">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia 
            sx={{ height: 140 }} 
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL } 
            title="Weather Image" 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} { }
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Temp: {info.temp}°C<br />
              Humidity: {info.humidity}%<br />
              Min Temp: {info.tempMin}°C<br />
              Max Temp: {info.tempMax}°C<br />
              Feels Like: {info.feelslike}°C<br />
              Weather: {info.weather} — chill vibes outside! 🌤️
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
