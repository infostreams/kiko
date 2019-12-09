import React from "react"
import {View} from "react-native"
import PropTypes from "prop-types"
import {Svg, G, Path} from "react-native-svg"
import {kiko} from "common/colors"

export const KikoMonkeyProps = {
    colors: PropTypes.shape({
        head: PropTypes.string,
        face: PropTypes.string,
        eyes: PropTypes.string
    }),
    embed: PropTypes.bool
}

export class KikoMonkey extends React.PureComponent {
    static props = KikoMonkeyProps

    static defaultProps = {
        colors: {
            head: kiko.darkBlue,
            face: kiko.lightBlue,
            eyes: '#fff',
        },
        embed: false
    }

    renderShape() {
        return (
            <G id='monkey' transform="translate(2.5353729)">
                <Path id='head' fill={this.props.colors.head} d="M322.4 59.12A44.22 44.22 0 0 0 294.24 40a45 45 0 0 0-9-.92 44.46 44.46 0 0 0-30.77 12.45 127.59 127.59 0 0 0-79-37.08V4.76a128.18 128.18 0 0 0-37.23 5.51L136.37 0a66 66 0 0 0-33.18 16.37l-4.12-5.45A65.85 65.85 0 0 0 75.6 45a44.21 44.21 0 0 0-22.11-6 45.17 45.17 0 0 0-9 .92A44.48 44.48 0 0 0 9.91 92.54a44.62 44.62 0 0 0 37.65 35c-.07 1.76-.22 3.49-.22 5.26A128.07 128.07 0 0 0 164 260.37v9.69a128.17 128.17 0 0 0 37.64-5.63l1.51 9.36a66 66 0 0 0 38.64-21.06l5.76 6.76a66.06 66.06 0 0 0 23.19-46.74A127.47 127.47 0 0 0 292.06 142a129.33 129.33 0 0 0-.89-14.41 44.64 44.64 0 0 0 37.61-35 44.14 44.14 0 0 0-6.38-33.47z"/>
                <Path id='face' fill={this.props.colors.face} d="M61.31 105.36A63.39 63.39 0 0 1 76 64.74a29.41 29.41 0 1 0-16.55 47.65c.77-.16 1.46-.47 2.2-.69-.22-2.09-.34-4.2-.34-6.34zM291.21 54.68a29.37 29.37 0 0 0-28.5 10.07 63.4 63.4 0 0 1 14.67 40.61c0 2.14-.12 4.25-.32 6.34.74.22 1.44.53 2.21.69a29.47 29.47 0 0 0 11.94-57.71zM265.11 100.09a51.88 51.88 0 0 0-51.43-46.43h-25.37a14.44 14.44 0 0 1-2.88 15.71l-9.62-9.26 3.86 16.4a20.73 20.73 0 0 1-24.92-15.43c0-.17 0-.33-.06-.5l-6.23 10.33a14.47 14.47 0 0 1-6.15-17.25H125a51.87 51.87 0 0 0-51.43 46.43 51.47 51.47 0 0 0 0 10.53A51.86 51.86 0 0 0 124.25 157a50.49 50.49 0 0 0-7.09 25.79c0 28.25 23.11 51.15 51.63 51.15s51.63-22.9 51.63-51.15a50.46 50.46 0 0 0-7.07-25.75h.33a51.89 51.89 0 0 0 51.43-46.44 51.47 51.47 0 0 0 0-10.53zm-133.66 38a36.14 36.14 0 0 1-4.41.28c-16.83 0-31.11-12.37-33.21-28.76a32.48 32.48 0 0 1 6.87-24.48 33.85 33.85 0 0 1 22.35-12.57 36 36 0 0 1 4.4-.28c16.83 0 31.11 12.37 33.21 28.76a32.52 32.52 0 0 1-6.86 24.48 33.85 33.85 0 0 1-22.35 12.6zM155 148.83a19.06 19.06 0 0 1 14.66 7 19 19 0 0 1 14.65-7v9A10.16 10.16 0 0 0 174.2 168h-9a10.16 10.16 0 0 0-10.2-10.16zM181.75 221a20.12 20.12 0 1 1 20.12-20.12A20.12 20.12 0 0 1 181.75 221zM238 125.55a33.83 33.83 0 0 1-22.35 12.57 36.1 36.1 0 0 1-4.4.28c-16.83 0-31.11-12.37-33.21-28.76a32.47 32.47 0 0 1 6.86-24.48 33.87 33.87 0 0 1 22.35-12.57 36.1 36.1 0 0 1 4.4-.28c16.83 0 31.11 12.37 33.21 28.76a32.47 32.47 0 0 1-6.86 24.48z"/>
                <Path id='eyes' fill={this.props.colors.eyes} d="M226.5 114.8a16.26 16.26 0 1 0-14.06 18.2 16.26 16.26 0 0 0 14.06-18.2zm-17.11 13.87a7.94 7.94 0 1 1 6.87-8.88 7.92 7.92 0 0 1-6.87 8.88zM142.31 114.8a16.26 16.26 0 1 0-14.06 18.2 16.26 16.26 0 0 0 14.06-18.2zm-17.11 13.87a7.94 7.94 0 1 1 6.87-8.88 7.94 7.94 0 0 1-6.87 8.88z"/>
            </G>
        );
    }

    render() {
        if (this.props.embed) {
            return this.renderShape()
        }
        return (
            <Svg viewBox="0 0 343.82 276.00" height='100%' width='100%'>
                {this.renderShape()}
            </Svg>
        )
    }
}

export const KikoWordmarkProps = {
    color: PropTypes.string,
    colors: PropTypes.shape({
        k: PropTypes.string,
        i: PropTypes.string,
        k2: PropTypes.string,
        o: PropTypes.string,
    }),
    embed: PropTypes.bool
}

export class KikoWordmark extends React.PureComponent {
    static props = KikoWordmarkProps

    static defaultProps = {
        color: null,
        colors: {
            k: kiko.red,
            i: kiko.yellow,
            k2: kiko.lightBlue,
            o: kiko.darkBlue
        },
        embed: false
    }

    renderShape() {
        return (
            <G id='wordmark'>
                <Path fill={this.props.color || this.props.colors.k} d="M79.57 402.68l-1.11 2.21H56.24L34.63 373a89.34 89.34 0 0 1-12 2.46v29.47H0v-85.99h22.59v37.45c15.6-4.3 26.53-14.62 26.53-31.68v-5.77H72.2v7.12c0 16.82-6.75 29.34-18.3 37.82z"/>
                <Path fill={this.props.color || this.props.colors.i} d="M102.56 318.94h22.31v85.95h-22.31z"/>
                <Path fill={this.props.color || this.props.colors.k2} d="M236.09 402.68l-1.09 2.21h-22.24L191.15 373a89.34 89.34 0 0 1-12 2.46v29.47h-22.63v-85.99h22.59v37.45c15.6-4.3 26.53-14.62 26.53-31.68v-5.77h23.08v7.12c0 16.82-6.75 29.34-18.29 37.82z"/>
                <Path fill={this.props.color || this.props.colors.o} d="M251.61 361.91c0-25.54 20.13-44.45 46-44.45 26.4 0 46.17 18.79 46.17 44.45s-20.26 44.45-46.17 44.45c-26.48 0-46-18.78-46-44.45zm69.13 0c0-14.24-10.2-24.43-23.09-24.43-13.38 0-23.08 10.31-23.08 24.43s9.82 24.44 23.08 24.44 23.09-10.19 23.09-24.44z"/>
            </G>
        )
    }

    render() {
        if (this.props.embed) {
            return this.renderShape()
        }
        return (
            <View width='100%'>
                <Svg viewBox="0 276.00 343.82 406.36" height='100%' width='100%'>
                    <G transform="translate(0, 138)">
                        {this.renderShape()}
                    </G>
                </Svg>
            </View>
        )
    }
}

export default class KikoLogo extends React.PureComponent {
    static props = {
        monkey: PropTypes.bool,
        monkeyProps: KikoMonkeyProps,
        wordmark: PropTypes.bool,
        wordmarkProps: KikoWordmarkProps,
    }
    static defaultProps = {
        monkey: true,
        monkeyProps: {},
        wordmark: true,
        wordmarkProps: {},

    }

    renderLogo() {
        if (this.props.monkey && this.props.wordmark) {
            // both monkey & wordmark
            return (
                <Svg viewBox='0 0 343.82 406.36' height='100%' width='100%'>
                    <KikoMonkey embed={true} {...this.props.monkeyProps} />
                    <KikoWordmark embed={true} {...this.props.wordmarkProps} />
                </Svg>
            )
        }

        if (this.props.monkey) {
            // only monkey
            return (<KikoMonkey {...this.props.monkeyProps} />)
        }

        if (this.props.wordmark) {
            // only wordmark
            return (<KikoWordmark {...this.props.wordmarkProps} />)
        }

        return null
    }

    render() {
        const logo = this.renderLogo()

        if (!logo) {
            return null
        }

        // assign to 'props' all the props that were passed in, except for
        // 'monkey', 'monkeyProps', etc.
        const {monkey, monkeyProps, wordmark, wordmarkProps, ...props} = this.props

        return (
            <View {...props}>
                {logo}
            </View>
        )
    }
}