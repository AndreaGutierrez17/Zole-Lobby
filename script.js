// Datos de ejemplo (se pueden reemplazar por fetch a tu API)
const rooms = [
  { id:"#101", owner:"Alex", type:"Public", players:"3/4", stake:"$10", status:"Waiting" },
  { id:"#102", owner:"Mia",  type:"Private",players:"4/4", stake:"$20", status:"Full"    },
  { id:"#103", owner:"Jin",  type:"Public", players:"2/4", stake:"$5",  status:"Waiting" },
  { id:"#104", owner:"Lia",  type:"Public", players:"1/4", stake:"$2",  status:"Waiting" },
  { id:"#105", owner:"Omar", type:"Private",players:"2/4", stake:"$15", status:"Waiting" },
  { id:"#106", owner:"Nora",  type:"Public", players:"3/4", stake:"$8",  status:"Waiting" },
  { id:"#107", owner:"Zac",  type:"Public", players:"1/4", stake:"$25",  status:"Waiting" },
  { id:"#108", owner:"John", type:"Private",players:"2/4", stake:"$15", status:"Waiting" },
];

function renderRooms(list){
  const tbody = document.getElementById('roomList');
  tbody.innerHTML = list.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${r.owner}</td>
      <td>${r.type}</td>
      <td>${r.players}</td>
      <td>${r.stake}</td>
      <td>${
        r.status === 'Full'
          ? '<span class="badge text-bg-success">Full</span>'
          : '<span class="badge text-bg-warning text-dark">Waiting</span>'
      }</td>
      <td class="text-end">
        ${
          r.status === 'Full'
            ? '<button class="btn btn-secondary btn-sm" disabled>Closed</button>'
            : '<button class="btn btn-primary btn-sm">Enter</button>'
        }
      </td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderRooms(rooms);

  // Marca tab activo (demo)
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', e => {
      document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
});

