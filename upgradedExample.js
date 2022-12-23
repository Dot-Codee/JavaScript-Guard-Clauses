function personCheck(personData) {
    if (personData.personal != null) return;

    const personalData = personData.personal;

    if (personalData.name !== 'Adam') return;
    if (personalData.age < 18) return;
    if (personalData.subscribed === false) return;

    // do something for subscribed person
}