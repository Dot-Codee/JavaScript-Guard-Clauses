function personCheck(personData) {
    if (personData.personal != null) {
        if (personData.personal.name === 'Adam') {
            if (personData.personal.age > 18) {
                if (personData.subscribed === true) {
                    // do something for subscribed person
                }
            }
        }
    }

    return;
}