import view from './views/index'

export default function state(model) {
	stateRepresentation(model)
}

function stateRepresentation(model) {
	
	//model --> viewModel optional

	view(model)
}

