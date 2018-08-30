module.exports = function main() {
    let result = '';
    for (let i = 99 ; i > 0 ; i--){
        if(i === 1){
            result += '1 bottle of beer on the wall, 1 bottle of beer.\n' +
                '    Take one down and pass it around, no more bottles of beer on the wall.\n' +
                '    No more bottles of beer on the wall, no more bottles of beer.\n' +
                '    Go to the store and buy some more, 99 bottles of beer on the wall.'
        }
        else if(i === 2){
            result += '2 bottles of beer on the wall, 2 bottles of beer.\n' +
                '    Take one down and pass it around, 1 bottle of beer on the wall.\n'
        }
        else {
            result += i+' bottles of beer on the wall, '+i+' bottles of beer.\n' +
                '    Take one down and pass it around, '+(i-1)+' bottles of beer on the wall.\n'
        }
    }
    return result;
};
