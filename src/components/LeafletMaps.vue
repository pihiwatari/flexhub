<template>
  <div id="map-container" class="map"></div>
</template>

<script>
import leaflet from 'leaflet'
export default {
  data() {
    return {
      // Deleted presentation urls
      flexSites: [
        {
          name: 'Flex Guadalajara North',
          coordinates: [20.740569822881508, -103.44331300435243],
          documentLink: ''
        },
        {
          name: 'Flex Althofen',
          coordinates: [46.87645134704752, 14.465309104788359],
          documentLink: ''
        },
        {
          name: 'Flex Brazil - Sorocaba',
          coordinates: [-23.427951996841873, -47.36841194419571],
          documentLink: ''
        },
        {
          name: 'Flex Manchester',
          coordinates: [41.80174303476511, -72.51057883056065],
          documentLink: ''
        },
        {
          name: "Flex Modi'in",
          coordinates: [31.923268586341585, 34.9787410864461],
          documentLink: ''
        },
        {
          name: 'Flex Sarvar',
          coordinates: [47.24712202634027, 16.910746684908915],
          documentLink: ''
        },
        {
          name: 'Flex Zhuhai',
          coordinates: [22.124173427260676, 113.33887540599584],
          documentLink: ''
        }
      ]
    }
  },
  methods: {
    createMarker(markerObject, map) {
      // Create a marker using coordinate information from flex locations objects
      let marker = leaflet.marker(markerObject.coordinates).addTo(map)

      // Display an alternate message if the site has no information
      if (!markerObject.documentLink) {
        marker.bindPopup(
          `
            <h3>${markerObject.name}</h3>
            <p>Sorry! No information available</p>
          `
        )
        return marker
      }

      // Bind markerObject data to the marker
      marker.bindPopup(
        `
          <h3>${markerObject.name}</h3>
          <a href="${markerObject.documentLink}" target="_blank">Open presentation</a>
        `
      )
    }
  },
  mounted() {
    let map = leaflet.map('map-container', {
      //object with map initial properties
      center: [20, 0],
      zoom: 2,
      zoomSnap: 0.1,
      zoomDelta: 0.1,
      minZoom: 2,
      dragging: true,
      maxBounds: [
        [80.703997, -165.9375],
        [-77.078784, 164.882813]
      ]
    })

    // Add tile image from maptiler.com
    leaflet
      .tileLayer(
        'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=c7sfiYbOOPrFNk6C9d8y',
        {
          attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      )
      .addTo(map)

    // Create a list of markers
    this.flexSites.forEach((flexSite) => this.createMarker(flexSite, map))
  }
}
</script>

<style scoped lang="scss">
.map {
  z-index: 0;
  height: 450px;
  margin: auto;
}
</style>
