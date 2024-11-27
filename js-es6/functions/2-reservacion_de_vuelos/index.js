export function arilineBooker(airline) {
 let passengers = [];

  const listPassengers = () => {
    return passengers;
  }

  const registerPassenger = (name, flightNumber) => {
    const passengerNames = passengers.map(passenger => passenger.name)
    if (passengerNames.includes(name)) {
      return `Pasajero ${name} ya registrado en el vuelo ${flightNumber} de ${airline}`;
    } else {
      passengers.push({name, flightNumber, checkIn: false});
      return `Pasajero ${name} registrado en el vuelo ${flightNumber} de ${airline}`;
    }
  }

  const checkIn = (name, flightNumber) => {
    const passengerNames = passengers.map(passenger => passenger.name)
    const pasajero = passengers.find(
      p => p.name === name && p.flightNumber === flightNumber
    );
    if (passengerNames.includes(name)) {
      if (pasajero.checkIn) {
        return `Pasajero ${name} ya realizo checkIn`
      } else {
        pasajero.checkIn = true;
        return `CheckIn realizado para el pasajero ${name} en el vuelo ${flightNumber} de ${airline}`
      }
    } else {
      return `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`
    }
  }

  const delerePassenger = (name, flightNumber) => {
    const index = passengers.findIndex(
      (p) => p.name === name && p.flightNumber === flightNumber
    );
    if (index < 0) {
      return `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`
    } else {
      if (passengers[index].checkIn) {
        return `Pasajero ${name} ya realizo checkIn`;
      } else {
        passengers.splice(index, 1);
        return `Pasajero ${name} eliminado del vuelo ${flightNumber} de ${airline}`
      }
    }
  }

  return {
    listPassengers,
    registerPassenger,
    checkIn,
    delerePassenger,
  };
}
