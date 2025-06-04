# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("olá Mundo")

#processamento - função 
def maior(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

#variáveis 
num1 = int(input("digite o primeiro numero: "))
num2 = int(input("digite o segundo numero: "))

#print - Sáida - imprima
print("Você digitou o número", num1,"e", num2)

resultado = maior(num1,num2)
print("O maior número é: ", resultado)