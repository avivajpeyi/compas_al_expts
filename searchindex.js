Search.setIndex({"docnames": ["al_and_gps", "code", "compas_al/learning_curve", "compas_al/ml_training_and_inference", "compas_al/pp_test", "examples/gpax_gp_al", "examples/inference_with_active_learning", "examples/modal_gp_al", "intro", "notes"], "filenames": ["al_and_gps.md", "code.md", "compas_al/learning_curve.ipynb", "compas_al/ml_training_and_inference.ipynb", "compas_al/pp_test.ipynb", "examples/gpax_gp_al.ipynb", "examples/inference_with_active_learning.ipynb", "examples/modal_gp_al.ipynb", "intro.md", "notes.md"], "titles": ["Bayesian Optimization for GPs", "Code", "Learning Curve", "COMPAS ML LnL training and inference", "PP test", "GPax and Active Learning", "AL for surrogate LnL (linear regression test)", "modAL active learning with sklearn GP", "Home", "Active learning notes"], "terms": {"can": 0, "provid": 0, "reconstruct": 0, "an": [0, 9], "unknown": 0, "from": [0, 1, 2, 3, 4, 5, 6, 7, 9], "spars": 0, "measur": 0, "addition": 0, "posterior": [0, 6], "predict": [0, 6, 7], "mean": [0, 9], "mu": 0, "varianc": 0, "sigma": [0, 6], "us": [0, 4, 6, 9], "deriv": 0, "alpha": [0, 6, 7], "ar": 0, "select": [0, 9], "next": 0, "point": 0, "model": [0, 4, 6, 7, 9], "problem": [0, 9], "activ": [0, 1, 8], "learn": [0, 8], "we": 0, "x_": 0, "underset": 0, "x": [0, 6, 7], "arg": [0, 6], "max": [0, 6, 9], "frac": 0, "1": [0, 2, 3, 4, 5, 6, 7], "n_": 0, "rm": 0, "mcmc": 0, "_": [0, 3, 6, 7], "i": [0, 5, 6], "where": 0, "total": 0, "number": [0, 7], "th": 0, "There": 0, "sever": 0, "map": 0, "scalar": 0, "valu": [0, 3, 7], "In": [0, 4, 6, 7], "gener": [0, 2, 4], "write": 0, "add": 0, "penalti": 0, "factor": 0, "avoid": 0, "same": 0, "region": 0, "space": 0, "repeatedli": 0, "thi": [0, 3, 7, 8, 9], "tack": 0, "some": [0, 1, 6], "follow": [0, 9], "lambda": [0, 6], "gamma": 0, "vec": 0, "r": [0, 7, 9], "distanc": 0, "visit": 0, "defin": [0, 7], "alpha_": 0, "pm": 0, "sqrt": 0, "beta": 0, "qquad": 0, "coeffici": 0, "determin": 0, "exploit": [0, 9], "trade": 0, "off": 0, "primari": 0, "goal": 0, "find": [0, 7], "global": 0, "minima": 0, "maxima": 0, "rather": 0, "than": 0, "entir": 0, "accur": 0, "help": 0, "choos": 0, "ad": 0, "A": [0, 9], "drawback": 0, "method": 0, "requir": [0, 7], "updat": [0, 9], "after": 0, "each": 0, "new": [0, 9], "computation": 0, "expens": 0, "here": 0, "more": 0, "exampl": [0, 3], "d1": 0, "d2": 0, "d3": 0, "obtain": 0, "separ": 0, "multivari": 0, "normal": [0, 6, 9], "set": [0, 2, 4], "kernel": [0, 7], "hyperparamet": 0, "henc": 0, "creat": [0, 9], "acquir": 0, "two": 0, "made": 0, "differ": [0, 9], "random": [0, 2, 3, 4, 6, 7, 9], "seed": [0, 2, 3, 4, 6], "logic": 0, "fit": [0, 7], "have": 0, "draw": 0, "one": [0, 9], "greedili": 0, "respect": 0, "see": 0, "wikipeda": 0, "As": 0, "probabilist": [0, 9], "doe": 0, "need": 0, "aim": 0, "reduc": 0, "It": 0, "high": 0, "also": [0, 9], "focus": 0, "maximis": 0, "minimis": 0, "s": [0, 6, 7, 9], "look": 0, "best": [0, 9], "so": 0, "far": 0, "ha": 0, "higher": 0, "probabl": [0, 9], "being": 0, "better": [0, 7], "u": 0, "mathcal": 0, "n": [0, 3, 4, 6], "cdf": 0, "pdf": [0, 9], "mu_": 0, "mse": [0, 4, 5], "snippet": 1, "lear": 1, "expir": 1, "compa": 1, "star": 1, "format": [1, 5], "al": [1, 8, 9], "project": [1, 8, 9], "import": [2, 3, 4, 5, 6, 7], "compas_surrog": [2, 3, 4, 6], "surrog": [2, 4, 8, 9], "diagnost": 2, "learning_curv": 2, "plot_learning_curve_for_lnl": 2, "outdir": [2, 3, 4, 6], "out_learning_curv": 2, "h5": [2, 3, 4], "det_matrix": [2, 3, 4], "__name__": [2, 3, 4, 6], "__main__": [2, 3, 4, 6], "0": [2, 3, 4, 5, 6, 7], "100": [2, 4, 6, 7], "300": [2, 6], "500": [2, 4], "700": 2, "1000": [2, 3, 7], "34mcompa": [2, 4, 6], "sur": [2, 4, 6], "0m": [2, 4, 6, 7], "24": [2, 4, 7], "08": [2, 4, 6], "12": 2, "18": [2, 7], "43": [2, 3], "info": [2, 4, 6, 7], "cach": [2, 4, 6], "cache_lnl": [2, 4], "npz": [2, 4], "mockpopul": [2, 4], "11735": [2, 4], "system": [2, 4], "sf": [2, 4], "006": 2, "2": [2, 4, 5, 6, 7, 9], "770": [2, 4], "900": [2, 4], "4": [2, 3, 4, 6, 7], "233": 2, "muz": [2, 3, 4], "66e": 2, "01": [2, 3, 4, 6, 7], "sigma0": [2, 3, 4], "73e": 2, "start": [2, 4], "10667": [2, 4], "57": [2, 3], "keep": [2, 4], "9921": 2, "likelihood": [2, 3, 4, 6], "drop": [2, 4], "nan": [2, 4, 6], "inf": [2, 4], "success": [2, 4], "save": [2, 4, 6], "train": [2, 4, 6, 8], "size": [2, 7], "parallel": 2, "n_job": 2, "backend": 2, "lokybackend": 2, "concurr": 2, "worker": 2, "walkthrough": 3, "run": [3, 4, 6], "analysi": [3, 6], "load": [3, 6, 7], "data": [3, 6, 7, 9], "inference_runn": 3, "run_infer": 3, "out_surr": 3, "def": [3, 4, 5, 6, 7], "main": [3, 9], "n_pt": 3, "f": [3, 4, 5, 6], "out_n_": 3, "cache_outdir": 3, "det_matrix_h5": 3, "universe_id": 3, "2500": 3, "clean": [3, 6], "fals": [3, 6, 7], "The": [3, 7], "lh": 3, "corner": [3, 6], "show": [3, 7], "distribut": 3, "weight": 3, "true": [3, 4, 6, 7], "test": [3, 8, 9], "prior": [3, 6], "rh": 3, "vs": 3, "uncertainti": 3, "surrrog": 3, "andd": 3, "seem": [3, 9], "veri": [3, 9], "strang": 3, "Is": 3, "error": [3, 9], "median": 3, "maxlnl": 3, "inj": 3, "asf": 3, "dsf": 3, "74": 3, "35": 3, "3": [3, 4, 5, 6, 7], "52": 3, "02": 3, "29": 3, "28": 3, "07": 3, "05": [3, 4, 6, 7], "51": [3, 4], "146": 3, "55": 3, "97": 3, "pp_test": 4, "ppresult": 4, "pprunner": 4, "run_analyses_and_make_pp_plot": 4, "n_train": 4, "n_inject": 4, "runner": 4, "det_matricies_fnam": 4, "sampler": [4, 6], "emce": [4, 6], "generate_injection_fil": 4, "pp_result": 4, "from_result": 4, "out": [4, 6], "json": 4, "plot": [4, 5, 6, 7], "pp_plot": 4, "png": [4, 5, 6], "out_pp_ntrain_": 4, "10": [4, 6, 7], "13": 4, "25": [4, 6, 7], "30": [4, 6], "inject": 4, "file": [4, 6], "out_pp_ntrain_500": 4, "injection_id": 4, "csv": 4, "infer": [4, 6, 8, 9], "31": [4, 6], "out_inj_884": 4, "univers": 4, "884": 4, "007": 4, "420": 4, "28e": 4, "53e": 4, "lnl": [4, 8], "comput": [4, 9], "42": 4, "9809": 4, "44": 4, "IN": 4, "400": 4, "metric": 4, "mae": 4, "77": 4, "r2": 4, "76": 4, "04": [4, 6], "114": 4, "37": 4, "up": 4, "33mwarn": [4, 6, 7], "skip": [4, 6, 7], "usr": [4, 6, 7], "local": [4, 6, 7], "lib": [4, 6, 7], "python3": [4, 6, 7], "11": [4, 6, 7], "site": [4, 6, 7], "packag": [4, 6, 7], "numpi": [4, 5, 6, 7], "py3": [4, 6, 7], "egg": [4, 6, 7], "due": [4, 6, 7], "invalid": [4, 6, 7], "metadata": [4, 6, 7], "entri": [4, 6, 7], "name": [4, 6, 7], "33m": [4, 6, 7], "pip": [5, 7], "instal": [5, 7], "git": 5, "http": [5, 7, 9], "github": [5, 7], "com": [5, 9], "ziatdinovmax": [5, 9], "q": 5, "load_ext": 5, "autoreload": 5, "includ": 5, "gpax_and_": 5, "py": [5, 7], "np": [5, 6, 7], "matplotlib": [5, 6, 7], "pyplot": [5, 6, 7], "plt": [5, 6, 7], "acq_color": 5, "plot_all_ms": 5, "fn": 5, "gpax_figur": 5, "dataset_": 5, "acq": 5, "txt": 5, "figur": [5, 7], "col": 5, "item": 5, "loadtxt": 5, "color": [5, 6], "label": [5, 6, 7], "legend": [5, 6, 7], "axhlin": [5, 6], "k": [5, 6, 7], "linestyl": [5, 6], "ylabel": 5, "xlabel": 5, "iter": [5, 6, 7], "tight_layout": [5, 6], "savefig": [5, 6], "close": [5, 7], "line": [6, 7], "gaussian": [6, 7, 9], "os": 6, "type": 6, "callabl": 6, "bilbi": 6, "sklearngpmodel": 6, "surrogate_likelihood": 6, "surrogatelikelihood": 6, "m_rang": 6, "5": [6, 7], "c_rang": 6, "out_inference_run": 6, "get_prior": 6, "dict": 6, "m": 6, "core": 6, "uniform": 6, "c": [6, 7], "return": [6, 7], "priordict": 6, "get_prior_samples_in_grid": 6, "n_grid_cel": 6, "20": 6, "meshgrid": 6, "linspac": 6, "ravel": [6, 7], "arrai": [6, 7], "t": 6, "generate_observed_data": 6, "func": 6, "func_kwarg": 6, "50": [6, 7], "ndarrai": 6, "sort": [6, 7], "y": [6, 7], "get_likelihood_fn": 6, "x_data": 6, "obs_y_data": 6, "gaussianlikelihood": 6, "get_likelihood_surrog": 6, "model_path": 6, "surr_model": 6, "path": 6, "exist": 6, "print": [6, 7], "mc_sampl": 6, "generate_lnl_data": 6, "reshap": [6, 7], "verbos": 6, "els": 6, "len": [6, 7], "lnl_val": 6, "zero": 6, "isinst": 6, "surr": 6, "m_i": 6, "c_i": 6, "enumer": 6, "zip": 6, "paramet": [6, 7, 9], "log_likelihood": 6, "plot_lnl_surfac": 6, "true_val": 6, "cmap": 6, "viridi": 6, "fig": 6, "none": 6, "savefn": 6, "kwg": 6, "sampl": [6, 7, 9], "ax": 6, "subplot": 6, "figsiz": [6, 7], "get_ax": 6, "level": 6, "contour": 6, "get_cmap": 6, "cset": 6, "ls": 6, "collect": 6, "set_linestyl": 6, "lw": 6, "set_linewidth": 6, "set_xlabel": 6, "set_xlim": 6, "set_ylabel": 6, "set_ylim": 6, "axvlin": 6, "titl": [6, 7], "frameon": 6, "dpi": 6, "plot_corn": 6, "result": 6, "plot_posterior_predictive_check": 6, "ob": 6, "tab": 6, "blue": 6, "kwarg": 6, "take": 6, "post": 6, "to_numpi": 6, "ys": 6, "y_low": 6, "y_mean": 6, "y_up": 6, "quantil": 6, "95": 6, "axi": 6, "scatter": [6, 7], "flatten": 6, "zorder": 6, "fill_between": [6, 7], "min": 6, "check": 6, "test_inference_run": 6, "true_paramet": 6, "obs_data": 6, "true_lnl": 6, "normal_result": 6, "run_sampl": 6, "injection_paramet": 6, "nwalker": 6, "surrogate_lnl": 6, "surr_result": 6, "surr_lnl": 6, "lnl_surf_fig": 6, "red": 6, "lnl_surf": 6, "ppc": 6, "analyt": 6, "crner": 6, "0m20": 6, "09": 6, "minimum": [6, 9], "maximum": 6, "latex_label": 6, "unit": 6, "boundari": 6, "class": 6, "nois": 6, "evid": 6, "singl": 6, "evalu": 6, "took": 6, "7": [6, 7], "495e": 6, "postarg": 6, "pool": 6, "live_danger": 6, "runtime_sortingfn": 6, "lnprob0": 6, "rstate0": 6, "blobs0": 6, "thin": 6, "storechain": 6, "mh_propos": 6, "checkpoint": 6, "emcee_true_lnl": 6, "pickl": 6, "autocorr": 6, "time": [6, 9], "23": 6, "discard": 6, "69": 6, "step": 6, "burn": 6, "00": 6, "867138": 6, "summari": 6, "nsampl": 6, "1550": 6, "ln_noise_evid": 6, "ln_evid": 6, "ln_bayes_factor": 6, "32m2023": 6, "230": 6, "1minfo": 6, "36mcompas_surrog": 6, "36m_preprocess_and_split_data": 6, "36m112": 6, "1mtrain": 6, "80": 6, "output": 6, "864e": 6, "emcee_surr_lnl": 6, "60": 6, "03": 6, "123357": 6, "2000": 6, "9": [6, 7], "462e": 6, "warn": [6, 7], "298e": 6, "python": [7, 9], "scikit": [7, 9], "0mrequir": 7, "alreadi": 7, "satisfi": 7, "scipi": [7, 9], "panda": 7, "skorch": 7, "tabul": 7, "tqdm": 7, "14": 7, "65": 7, "dateutil": 7, "8": 7, "pytz": 7, "2020": [7, 9], "2023": 7, "tzdata": 7, "2022": 7, "joblib": 7, "threadpoolctl": 7, "six": 7, "16": 7, "17": 7, "functool": 7, "partial": 7, "gaussian_process": 7, "gaussianprocessregressor": 7, "matern": 7, "bayesianoptim": 7, "acquisit": 7, "optimizer_ei": 7, "max_ei": 7, "example_dataset": 7, "dataset1": 7, "dataset_1": 7, "noise_sigma": 7, "idx": 7, "argsort": 7, "x_initi": 7, "y_initi": 7, "process": [7, 9], "length_scal": 7, "regressor": [7, 9], "optim": [7, 8, 9], "estim": 7, "x_train": 7, "y_train": 7, "query_strategi": 7, "bayesian": [7, 8], "n_queri": 7, "rang": 7, "query_idx": 7, "query_inst": 7, "queri": 7, "teach": 7, "y_pred": 7, "y_std": 7, "return_std": 7, "x_max": 7, "y_max": 7, "get_max": 7, "current": 7, "optimum": 7, "linewidth": 7, "function": [7, 9], "first": 7, "five": 7, "_gpr": 7, "659": 7, "convergencewarn": 7, "lbfg": 7, "fail": 7, "converg": 7, "statu": 7, "abnormal_termination_in_lnsrch": 7, "increas": 7, "max_it": 7, "scale": [7, 9], "shown": 7, "org": [7, 9], "stabl": 7, "modul": [7, 9], "preprocess": 7, "html": [7, 9], "_check_optimize_result": 7, "opt_r": 7, "419": 7, "found": 7, "dimens": 7, "specifi": 7, "lower": 7, "bound": [7, 9], "1e": 7, "decreas": 7, "call": 7, "again": 7, "mai": 7, "activelearn": 7, "whitekernel": 7, "rbf": 7, "gp_regression_std": 7, "std": 7, "argmax": 7, "n_initi": 7, "initial_idx": 7, "choic": 7, "replac": 7, "length_scale_bound": 7, "1e3": 7, "noise_level": 7, "noise_level_bound": 7, "ypred": 7, "04801841": 7, "04801825": 7, "04801792": 7, "04801791": 7, "04801776": 7, "04801458": 7, "04801444": 7, "04801419": 7, "04801336": 7, "04801314": 7, "04801299": 7, "04801283": 7, "04801242": 7, "04801217": 7, "04801169": 7, "04801107": 7, "0480087": 7, "04800835": 7, "04800785": 7, "04800767": 7, "04800723": 7, "04800638": 7, "04800616": 7, "048006": 7, "04800575": 7, "0480057": 7, "04800548": 7, "04800512": 7, "04800466": 7, "04800442": 7, "04800363": 7, "04800273": 7, "04800236": 7, "04800226": 7, "04800221": 7, "04800157": 7, "04800115": 7, "04800106": 7, "04800052": 7, "04800018": 7, "04800012": 7, "04799944": 7, "04799635": 7, "04799552": 7, "04799551": 7, "04799504": 7, "04799396": 7, "04799354": 7, "04799331": 7, "04799295": 7, "04799263": 7, "04799249": 7, "04799245": 7, "04799155": 7, "04799108": 7, "04799004": 7, "04798945": 7, "04798847": 7, "04798838": 7, "04798818": 7, "04798806": 7, "04798695": 7, "04798666": 7, "04798599": 7, "04798541": 7, "04798498": 7, "04798483": 7, "04798443": 7, "04798442": 7, "04798419": 7, "04798399": 7, "04798365": 7, "04798337": 7, "04798308": 7, "04798291": 7, "04798115": 7, "04798102": 7, "04797968": 7, "04797914": 7, "04797905": 7, "0479783": 7, "04797827": 7, "04797805": 7, "0479777": 7, "04797706": 7, "04797633": 7, "04797616": 7, "04797572": 7, "0479748": 7, "04797445": 7, "04797358": 7, "04797332": 7, "04797289": 7, "04797241": 7, "04797167": 7, "04797142": 7, "0479714": 7, "0479712": 7, "04797022": 7, "04797007": 7, "429": 7, "k1__length_scal": 7, "upper": [7, 9], "line2d": 7, "0x12f232c90": 7, "jupyt": 7, "environ": 7, "pleas": 7, "rerun": 7, "cell": 7, "represent": [7, 9], "trust": 7, "notebook": [7, 9], "On": 7, "unabl": 7, "render": 7, "try": 7, "page": 7, "nbviewer": 7, "gaussianprocessregressorgaussianprocessregressor": 7, "65766426": 7, "14449491": 7, "04868531": 7, "61443945": 7, "23285405": 7, "21345007": 7, "72030483": 7, "23328256": 7, "29135154": 7, "25395391": 7, "31820918": 7, "83850918": 7, "38174095": 7, "72087531": 7, "93414308": 7, "contain": 8, "few": 8, "experi": [8, 9], "note": 8, "while": 8, "work": [8, 9], "ml": 8, "quaisr": 8, "gp": 8, "gpax": [8, 9], "linear": 8, "regress": [8, 9], "modal": [8, 9], "sklearn": [8, 9], "curv": 8, "pp": 8, "base": 9, "least": 9, "confid": 9, "lewi": 9, "catlett": 9, "margin": 9, "entropi": 9, "committe": 9, "algorithm": 9, "vote": 9, "consensu": 9, "disagr": 9, "cohn": 9, "et": 9, "multilabel": 9, "strategi": 9, "svm": 9, "binari": 9, "brinker": 9, "loss": 9, "li": 9, "minconfid": 9, "meanconfid": 9, "minscor": 9, "meanscor": 9, "esuli": 9, "sebastiani": 9, "expect": 9, "reduct": 9, "log": 9, "roi": 9, "mccallum": 9, "improv": 9, "snoek": 9, "batch": 9, "rank": 9, "mode": 9, "cardoso": 9, "inform": 9, "densiti": 9, "framework": 9, "nigam": 9, "stream": 9, "atla": 9, "standard": 9, "devianc": 9, "ensembl": 9, "excel": 9, "agw": 9, "tut": 9, "inspir": 9, "hi": 9, "public": 9, "perspect": 9, "dropout": 9, "approxim": 9, "repres": 9, "gal": 9, "ghahramani": 9, "2016": 9, "describ": 9, "mont": 9, "carlo": 9, "wai": 9, "through": 9, "stochast": 9, "tey": 9, "2018": 9, "batchnorm": 9, "norm": 9, "gordon": 9, "wilson": 9, "izmailov": 9, "present": 9, "multi": 9, "swag": 9, "mix": 9, "between": 9, "vi": 9, "advanc": 9, "variat": 9, "zhang": 9, "give": 9, "quick": 9, "introduct": 9, "most": 9, "recent": 9, "simpl": 9, "baselin": 9, "maddox": 9, "2019": 9, "easi": 9, "imag": 9, "islam": 9, "2017": 9, "fundament": 9, "do": 9, "bia": 9, "dasgupta": 9, "2009": 9, "solv": 9, "combin": 9, "heurist": 9, "classif": 9, "prefer": 9, "houlsbi": 9, "2011": 9, "bald": 9, "explor": 9, "lattic": 9, "hamiltonian": 9, "structur": 9, "discoveri": 9, "via": 9, "dynam": 9, "review": 9, "arxiv": 9, "ab": 9, "00236": 9, "book": 9, "www": 9, "man": 9, "human": 9, "loop": 9, "machin": 9, "toward": 9, "robust": 9, "scientif": 9, "2201": 9, "12632": 9, "1703": 9, "02910": 9, "compar": 9, "survei": 9, "2203": 9, "13450": 9, "googl": 9, "playground": 9, "implement": 9, "pytorch": 9, "librari": 9, "common": 9, "workshop": 9, "kdd": 9, "hand": 9, "transfer": 9, "built": 9, "jax": 9, "numpyro": 9, "unstabl": 9, "activeml": 9, "preprint": 9, "manuscript": 9, "202103": 9, "0194": 9, "v1": 9, "pypi": 9, "baal": 9, "like": 9, "focu": 9, "readthedoc": 9, "io": 9, "en": 9, "latest": 9, "compat": 9, "sklearn_tutori": 9, "2006": 9, "09916": 9, "deepal": 9, "ej0cl6": 9, "adapt": 9, "techniqu": 9, "index": 9, "alipi": 9, "agnost": 9, "tflow": 9, "nuaa": 9, "libact": 9, "featur": 9, "meta": 9, "allow": 9, "automat": 9, "fly": 9, "hasnt": 9, "been": 9, "year": 9, "ntucllab": 9, "botorch": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"bayesian": [0, 9], "optim": 0, "gp": [0, 3, 7, 9], "acquisit": 0, "function": 0, "penal": 0, "recent": 0, "observ": 0, "The": 0, "upper": 0, "confid": 0, "bound": 0, "ucb": 0, "batch": 0, "qucb": 0, "thompson": 0, "sampl": [0, 3], "uncertainti": [0, 9], "base": 0, "explor": 0, "ue": 0, "expect": 0, "improv": 0, "ei": 0, "tabl": 0, "all": 0, "anim": 0, "code": [1, 8], "learn": [2, 5, 7, 9], "curv": 2, "lear": 2, "plot": [2, 3], "mock": 2, "univers": 2, "us": [2, 3], "lnl": [2, 3, 6], "comput": 2, "compa": [3, 8], "ml": 3, "train": 3, "infer": 3, "result": 3, "model": 3, "metric": 3, "after": 3, "surrog": [3, 6], "pp": 4, "test": [4, 6], "gpax": 5, "activ": [5, 7, 9], "al": 6, "linear": 6, "regress": 6, "modal": 7, "sklearn": 7, "home": 8, "exampl": 8, "note": 9, "paper": 9, "method": 9, "algo": 9, "how": 9, "estim": 9, "deep": 9, "network": 9, "gener": 9, "tutori": 9, "worksop": 9, "codebas": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})