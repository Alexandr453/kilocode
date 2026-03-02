import {
	type ProviderName,
	type ModelInfo,
	anthropicModels,
	bedrockModels,
	cerebrasModels,
	claudeCodeModels,
	deepSeekModels,
	moonshotModels,
	// kilocode_change start
	// geminiModels,
	// kilocode_change end
	mistralModels,
	openAiNativeModels,
	openAiCodexModels,
	qwenCodeModels,
	vertexModels,
	xaiModels,
	groqModels,
	sambaNovaModels,
	doubaoModels,
	internationalZAiModels,
	fireworksModels,
	rooModels,
	featherlessModels,
	minimaxModels,
	basetenModels,
	corethinkModels,
} from "@roo-code/types"

export const MODELS_BY_PROVIDER: Partial<Record<ProviderName, Record<string, ModelInfo>>> = {
	anthropic: anthropicModels,
	"claude-code": claudeCodeModels,
	bedrock: bedrockModels,
	cerebras: cerebrasModels,
	deepseek: deepSeekModels,
	doubao: doubaoModels,
	moonshot: moonshotModels,
	// kilocode_change start
	// gemini: geminiModels,
	// kilocode_change end
	mistral: mistralModels,
	"openai-native": openAiNativeModels,
	"openai-codex": openAiCodexModels,
	"qwen-code": qwenCodeModels,
	vertex: vertexModels,
	xai: xaiModels,
	groq: groqModels,
	// chutes: chutesModels, // kilocode_change
	sambanova: sambaNovaModels,
	zai: internationalZAiModels,
	fireworks: fireworksModels,
	roo: rooModels,
	featherless: featherlessModels,
	minimax: minimaxModels,
	baseten: basetenModels,
	corethink: corethinkModels,
}

export const PROVIDERS = [
	{ value: "litellm", label: "LiteLLM", proxy: true },
	{ value: "openai", label: "OpenAI Compatible", proxy: true },
	{ value: "openai-responses", label: "OpenAI Compatible (Responses)", proxy: true },
].sort((a, b) => a.label.localeCompare(b.label))
