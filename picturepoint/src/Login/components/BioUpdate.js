import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { doBioUpdate } from '../../Firebase/functions/auth'
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})

const INITIAL_STATE = {
    bio: '',
    error: null,
}

class BioUpdateform extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const { bio } = this.state

        doBioUpdate(bio)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }))
            })
            .catch((error) => {
                this.setState(byPropKey('error', error))
            })

        event.preventDefault()
    }

    render() {
        const { bio, error } = this.state

        const isInvalid = bio === ''

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    name="Bio"
                    value={bio}
                    id="standard-secondary"
                    label="New Bio"
                    color="primary"
                    onChange={(event) =>
                        this.setState(byPropKey('bio', event.target.value))
                    }
                />
                <br />
                <Button
                    type="submit"
                    disabled={isInvalid}
                    variant="contained"
                    color="primary"
                >
                    Update Bio
                </Button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default BioUpdateform
