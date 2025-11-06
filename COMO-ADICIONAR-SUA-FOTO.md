# 📸 Como Adicionar Sua Foto de Perfil Real

## Passo a Passo Simples

### 1️⃣ Prepare Sua Foto
Você forneceu uma foto (da moto vermelha). Aqui está como adicioná-la:

**Opção A: Usar a foto que você enviou**
- Salve a imagem que você enviou (da moto) como `profile.jpg`
- Coloque-a na pasta `assets/`

**Opção B: Usar outra foto profissional**
- Escolha uma foto sua em ambiente profissional
- Formato recomendado: JPG ou PNG
- Tamanho ideal: 800x800 pixels (quadrada)
- Boa iluminação e fundo limpo

### 2️⃣ Salve a Foto
```
/portifolio
  /assets
    profile.jpg  ← Coloque sua foto aqui
```

### 3️⃣ Atualize o HTML
Abra o arquivo `index.html` e procure por esta linha (aproximadamente linha 81):

```html
<img src="assets/profile.svg" alt="Victor Hugo">
```

Altere para:

```html
<img src="assets/profile.jpg" alt="Victor Hugo">
```

### 4️⃣ Recarregue o Site
- Atualize a página no navegador (F5 ou Cmd+R)
- Sua foto real agora aparecerá!

## 🎨 Dicas para Melhor Resultado

1. **Corte a foto em formato quadrado** antes de adicionar
2. **Use ferramentas online gratuitas**:
   - Remove.bg (para remover fundo)
   - Canva (para editar e recortar)
   - TinyPNG (para otimizar tamanho)

3. **Resolução recomendada**: 400x400px a 1000x1000px
4. **Tamanho do arquivo**: Menos de 500KB

## 🔄 Se Quiser Testar Primeiro

Você pode usar sites como:
- https://picresize.com/ (redimensionar)
- https://www.remove.bg/ (remover fundo)

## ✅ Checklist Final

- [ ] Foto salva como `profile.jpg` na pasta `assets/`
- [ ] Linha no HTML alterada de `.svg` para `.jpg`
- [ ] Página recarregada no navegador
- [ ] Foto aparecendo corretamente

---

💡 **Nota**: Atualmente o portfólio está usando um placeholder SVG. Sua foto real deixará o portfólio ainda mais profissional!
