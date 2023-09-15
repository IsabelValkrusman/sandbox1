import "./styles.css";

const myjson = [
  {
    Car: {
      Color: "Rose Red",
      "Tinted windows": false,
      Wheels: "4",
      "Roof cargo": null,
      Entertainment: ["FM Radio", "MP3 ,MP4 and MKV player","harman/kardon speakers"],
      Accessories: "satnav, cruise control",
    },
    Car1: {
      Color: "Navy blue",
      "Tinted windows": true,
      Wheels: "4",
      "Roof cargo": true,
      Entertainment: ["FM Radio", "Apple CarPlay/Android Auto","Bowers & Wilkins Premium Sound speakers"],
      Accessories: "self drive system, luggage cover",
    }
  }
];

document.getElementById("app").innerHTML = `
<div id="json">
  <h1>Car properties</h1>
  <p>Color: ${myjson[0].Car.Color}</p>
  <p>Tinted windows: ${myjson[0].Car["Tinted windows"]}</p>
  <p>Wheels: ${myjson[0].Car.Wheels}</p>
  <p>Roof cargo: ${myjson[0].Car["Roof cargo"]}</p>
  <p>Entertainment: ${myjson[0].Car.Entertainment}</p>
  <p>Accessories: ${myjson[0].Car.Accessories}</p>
</div>
<table>
  <th>Property</th>
  <th>Car 0</th>
  <th>Car 1</th>
  <tr>
    <td>Color
    <td><p>${myjson[0].Car.Color}</p></td>
    <td><p>${myjson[0].Car1.Color}</p></td>
  </tr>
  <tr>
    <td>Tinted windows
    <td><p>${myjson[0].Car["Tinted windows"]}</p></td>
    <td><p>${myjson[0].Car1["Tinted windows"]}</p></td>
  </tr>
  <tr>
    <td>Wheels
    <td><p>${myjson[0].Car.Wheels}</p></td>
    <td><p>${myjson[0].Car1.Wheels}</p></td>
  </tr>
  <tr>
    <td>Roof cargo
    <td><p>${myjson[0].Car["Roof cargo"]}</p></td>
    <td><p>${myjson[0].Car1["Roof cargo"]}</p></td>
  </tr>
  <tr>
    <td>Entertainment
    <td><p>${myjson[0].Car.Entertainment}</p></td>
    <td><p>${myjson[0].Car1.Entertainment}</p></td>
  </tr>
  <tr>
    <td>Accessories
    <td><p>${myjson[0].Car.Accessories}</p></td>
    <td><p>${myjson[0].Car1.Accessories}</p></td>
  </tr>
</table>

<style>
table {
border-collapse: collapse;
width: 100%;
}

th, td {
text-align: left;
padding: 8px;
}
td.red {
color: red;
}

tr:nth-child(even) {background-color: #f2f2f2;}
</style>
`;