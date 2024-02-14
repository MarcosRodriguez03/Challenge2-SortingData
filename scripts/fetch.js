



const callData = async () => {

    const promise = await fetch('./data/data.json')
    const data = await promise.json();
    return data.People
}

export { callData }