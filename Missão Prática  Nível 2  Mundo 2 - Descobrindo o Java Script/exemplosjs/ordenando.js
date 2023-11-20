// Função para trocar os valores de duas posições de um vetor
const swap = (vetor, posicao1, posicao2) => {
    [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (vetor, quantidadeTrocas) => {
    for (let i = 0; i < quantidadeTrocas; i++) {
        const posicao1 = Math.floor(Math.random() * vetor.length);
        const posicao2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, posicao1, posicao2);
    }
};

// Função de ordenação Bubble Sort
const bubble_sort = (vetor) => {
    const len = vetor.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// Função de ordenação Selection Sort
const selection_sort = (vetor) => {
    const len = vetor.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (vetor[j] < vetor[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(vetor, i, min);
        }
    }
};

// Função de ordenação Quick Sort
const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        const pivot = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivot - 1);
        quick_sort(vetor, pivot + 1, fim);
    }
};

// Função de apoio ao Quick Sort para particionamento
const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};
