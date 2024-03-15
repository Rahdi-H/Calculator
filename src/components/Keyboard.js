import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { ThemeContext } from '../context.js/ThemeContext';

function Keyboard() {
    const theme = useContext(ThemeContext)
    const [firstnumber, setFirstnumber] = useState('')
    const [secondnumber, setSecondnumber] = useState('')
    const [result, setResult] = useState(null)
    const [op, setOp] = useState('')
    const handleNumber = (number) => {
        if (firstnumber == '') {
            setFirstnumber(number)
        } else{
            setFirstnumber(firstnumber + number)
        }
        console.log('clicked');
    }
    const Clear = ()=> {
        setFirstnumber('')
        setSecondnumber('')
        setResult(null)
        console.log('clear clicked');
    }
    const Operation = (op)=> {
        if (result) {
            setResult('')
        }
        setSecondnumber(firstnumber)
        setFirstnumber('')
        setOp(op)
    }
    const Equal = ()=> {
        if (op) {
            switch (op) {
                case '+':
                    setResult(parseFloat(secondnumber) + parseFloat(firstnumber))
                    setFirstnumber(String(parseFloat(secondnumber) + parseFloat(firstnumber)))
                    break;
                case '-':
                    setResult(parseFloat(secondnumber) - parseFloat(firstnumber))
                    setFirstnumber(String(parseFloat(secondnumber) - parseFloat(firstnumber)))
                    break;
                case '/':
                    setResult(parseFloat(secondnumber) / parseFloat(firstnumber))
                    setFirstnumber(String(parseFloat(secondnumber) / parseFloat(firstnumber)))
                    break;
                case 'x':
                    setResult(parseFloat(secondnumber) * parseFloat(firstnumber))
                    setFirstnumber(String(parseFloat(secondnumber) * parseFloat(firstnumber)))
                    break;
                default:
                    break;
            }
            setSecondnumber('')
            console.log("ldk");
        }
    }
    const Backspace = ()=> {
        setResult('')
        setFirstnumber(firstnumber.slice(0, -1))
    }
    const Percentage = ()=> {
        setFirstnumber(String(parseFloat(firstnumber) / 100))
    }
  return (
    <View style={styles.main}>
        <View style={styles.textSection}>
            <Text style={[theme == 'light' ? {color: 'black'}: {color: 'white'}, styles.text]}>{firstnumber}</Text>
        </View>
        <View style={styles.sub}>
            <Pressable onPress={Clear}>
                <Button title={'C'} isGray={true}/>
            </Pressable>
            <Pressable onPress={()=> handleNumber()}>
                <Button title={'+/-'} isGray={true} />
            </Pressable>
            <Pressable onPress={()=> Percentage()}>
                <Button title={'%'} isGray={true} />
            </Pressable>
            <Pressable onPress={()=> Operation('/')}>
                <Button title={'÷'} isBlue={true} />
            </Pressable>
        </View>
        <View style={styles.sub}>
            <Pressable onPress={()=> handleNumber('1')}>
                <Button title={'1'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('2')}>
                <Button title={'2'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('3')}>
                <Button title={'3'} />
            </Pressable>
            <Pressable onPress={()=> Operation("x")}>
                <Button title={'×'} isBlue={true} />
            </Pressable>
        </View>
        <View style={styles.sub}>
            <Pressable onPress={()=> handleNumber("4")}>
                <Button title={'4'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('5')}>
                <Button title={'5'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('6')}>
                <Button title={'6'}/>
            </Pressable>
            <Pressable onPress={()=> Operation('-')}>
                <Button title={'-'} isBlue={true} />
            </Pressable>
        </View>
        <View style={styles.sub}>
            <Pressable onPress={()=> handleNumber('7')}>
                <Button title={'7'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('8')}>
                <Button title={'8'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('9')}>
                <Button title={'9'} />
            </Pressable>
            <Pressable onPress={()=> Operation('+')}>
                <Button title={'+'} isBlue={true} />
            </Pressable>
        </View>
        <View style={styles.sub}>
            <Pressable onPress={()=> handleNumber('.')}>
                <Button title={'.'} />
            </Pressable>
            <Pressable onPress={()=> handleNumber('0')}>
                <Button title={'0'} />
            </Pressable>
            <Pressable onPress={()=> Backspace()}>
                {theme == 'light' ? 
                <Button title={"<-"} image={require('../../assets/backspace.png')}/>
            : <Button image={require('../../assets/back-white.png')} />    
            }
            </Pressable>
            <Pressable onPress={()=> Equal()}>
                <Button title={'='} isBlue={true} />
            </Pressable>
        </View>
    </View>
  )
}

export default Keyboard;

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 10

    },
    sub: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textSection: {
        flex: 1,
        height: '45%',
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        fontSize: 80
    }
})