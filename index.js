const turf = require('@turf/turf');
const express = require('express');

// Creating Express app
const app = express();

// middleware for parsing JSON request bodies
app.use(express.json());

// set of 50 lines as an array of GeoJSON features
const lines = [
  {
    "type": "Feature",
    "properties": {
      "id": "L01"
    },
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-122.436, 37.788],
        [-122.423, 37.766]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L02"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-74.0386542, 40.7302174],
        [-74.038756, 40.7295611],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L03"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-74.061602, 40.705933],
        [-74.06214, 40.706563],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L04"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-74.156101, 40.709045],
        [-74.156801, 40.707801],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L05"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-99.311072, 19.488246],
        [-99.311002, 19.488132],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L06"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-99.311072, 19.488246],
        [-99.311002, 19.488132],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L07"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-102.829608, 23.177846],
        [-102.829469, 23.177842],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L08"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-102.91307, 23.237655],
        [-102.913173, 23.237484],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L09"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-101.065638, 25.451006],
        [-101.065747, 25.451142],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L10"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-101.067146, 25.451271],
        [-101.067264, 25.451192],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L11"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.883187, 41.137233],
        [-95.883079, 41.137048],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L12"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.868832, 40.999998],
        [-95.868593, 41.000089],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L13"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.55877, 29.719849],
        [-95.55907, 29.719417],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L14"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.557118, 29.716399],
        [-95.556745, 29.716426],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L15"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-80.389066, 25.87167],
        [-80.389455, 25.871849],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L16"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-80.385768, 25.870139],
        [-80.385764, 25.870427],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L17"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-80.387307, 25.845605],
        [-80.386517, 25.845614],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L18"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-80.387439, 25.851352],
        [-80.387722, 25.851354],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L19"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-82.436436, 27.954596],
        [-82.436292, 27.954772],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L20"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-82.461462, 27.943111],
        [-82.461444, 27.943334],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L21"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-82.461885, 27.942732],
        [-82.461888, 27.942575],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L22"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-104.782665, 39.916254],
        [-104.782906, 39.915992],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L23"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-104.851563, 39.932672],
        [-104.851404, 39.932676],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L24"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-96.899437, 32.910762],
        [-96.899738, 32.91075],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L25"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-96.9019583, 32.9076669],
        [-96.9019857, 32.9078065],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L26"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-71.112546, 42.351257],
        [-71.11243, 42.351384],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L27"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-71.112433, 42.351394],
        [-71.112307, 42.351557],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L28"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.776198, 29.704225],
        [-95.77644, 29.704221],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L29"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-71.413586, 41.951399],
        [-71.413585, 41.951033],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L30"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-76.560518, 43.059497],
        [-76.560884, 43.060285],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L31"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-76.8491, 42.965208],
        [-76.849238, 42.965968],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L32"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.9473347, 36.021712],
        [-95.9473327, 36.0215865],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L33"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.924582, 36.024958],
        [-95.9245402, 36.0251324],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L34"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.7365923, 36.0438484],
        [-95.7368391, 36.0441511],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L35"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.742195, 36.044985],
        [-95.74238, 36.044897],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L36"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-97.651642, 35.214745],
        [-97.651647, 35.214927],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L37"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-97.697811, 35.211156],
        [-97.69791, 35.210806],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L38"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-97.535654, 35.608767],
        [-97.535667, 35.608981],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L39"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-97.546073, 35.609614],
        [-97.546126, 35.609459],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L40"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-95.158076, 36.187702],
        [-95.157943, 36.187533],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L41"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-94.976081, 36.2166334],
        [-94.9760616, 36.21687],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L42"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-77.056319, 39.108952],
        [-77.056503, 39.108797],
      ],
    },
  },
  {
    "type": "Feature",
    "properties": {
      "id": "L43"
    },
    "geometry": {
      type: "LineString",
      coordinates: [
        [-77.051648, 39.105948],
        [-77.051861, 39.105767],
      ],
    },
  },
];

//handler for the API endpoint
function findIntersectingLines(req, res) {

  const linestring = req.body;

  // Checking linestring valid GeoJSON
  if (linestring.type !== 'LineString' || !Array.isArray(linestring.coordinates)) {
    res.status(500).send('Invalid linestring');
    return;
  }

  //Empty array to hold the intersecting line IDs and points
  const intersections = [];

  // looping through lines and check for intersections
  for (const line of lines) {
    // converting the line to a TurfJS line
    const turfLine = turf.lineString(line.geometry.coordinates);

    // Checking intersection
    const intersection = turf.lineIntersect(linestring, turfLine);

    //if intersection, add the line ID and intersection point to the array
    if (intersection.features.length > 0) {
      const lineId = line.properties.id;
      const intersectionPoint = intersection.features[0].geometry.coordinates;
      intersections.push({ lineId, intersectionPoint });
    }
  }

  //return the array
  res.send(intersections);
}

// middleware to check the auth header
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Map ')) {
    res.status(401).send('Unauthorized');
    return;
  }

  const token = authHeader.split(' ')[1];
  
  if (token !== 'Up') {
    res.status(401).send('Unauthorized');
    return;
  }

  next();
}

//api endpoint with the auth middleware and the findIntersectingLines handler
app.post('/api/findIntersectingLines', authMiddleware, findIntersectingLines);

//server start
app.listen(3000, () => console.log('Server started on port 3000'));