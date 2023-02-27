function IsAuthed(user) {
    return Object.keys(user).length === 0
}

export default IsAuthed;