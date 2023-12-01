import { StyleSheet, View, Image, Text, Button, Alert, Pressable } from 'react-native';
import { useState } from "react";
import stylesCard from './styles';

function ProporTroca(){
    console.log("Item não pode ser trocado pois está ligado a alma")
    // tentei implementar o Alert mas não estava dando o PopUp mesmo quando copiei o codigo de referência em um projeto zero.
};


function CartaoItem({nomeItem, descript, nomeDaImagem}){
    return(
        <View style={stylesCard.caixaExt}>
                <Text style={stylesCard.nomeItem}>{nomeItem}</Text>
                <Text style={stylesCard.descript}>{descript}</Text>

                    <View style={stylesCard.image}>
                        <Image
                        source={require(`/assets/${nomeDaImagem}`)}
                        style={stylesCard.image}
                        />

                    </View>

                    <Pressable style={stylesCard.botaoTroca} onPress={ProporTroca}>
                        <Text>Trocar {nomeItem}?</Text>
                    </Pressable>
        </View>
    )
};

export default CartaoItem;