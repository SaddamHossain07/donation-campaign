const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donations')

    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return []
}


const saveDonation = id => {
    const savedDonations = getStoredDonation()
    savedDonations.push(id)
    localStorage.setItem('donations', JSON.stringify(savedDonations))
}

export { getStoredDonation, saveDonation }

